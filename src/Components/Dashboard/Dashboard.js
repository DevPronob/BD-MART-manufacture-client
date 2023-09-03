import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import useAdmin from "../hooks/useAdmin";
import './Dashboard.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [isAdmin, isAdminLoading] = useAdmin();
  console.log(isAdmin)

  if (isAdminLoading) {
    return <div className='text-center mt-[200px]'>Loading...</div>;
  }
    // const [admin] =useAdmin(user)
  
    return (
//         <div>
//     <div class="drawer drawer-mobile">
// <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
// <div class="drawer-content ">

// <Outlet></Outlet>


// </div> 
// <div class="drawer-side">
// <label for="my-drawer-2" class="drawer-overlay"></label> 
// <ul class="menu p-4 overflow-y-auto w-80  text-base-content">

// <li><Link to="/dashboard">Purchase product </Link></li>
// {/* <li><Link to="/dashboard/servicelist">Service List</Link></li>
// <li><Link to="/dashboard/review">Review</Link></li>
// {user && <li><Link to="/dashboard/users">All Users</Link></li>} */}

// </ul>

// </div>
// </div>
// </div>
<div class="drawer lg:drawer-open mt-[10px]">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
  <Outlet></Outlet>
  

  
  </div> 
  <div class="drawer-side shadow-md">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 md:text-xs  text-base-content">

     <li className='sm:text-xs'><Link to="/dashboard">My Bookings</Link></li>
     <li><Link to="/dashboard/add-review">Review</Link></li>
     {
        isAdmin && <li><Link to="/dashboard/users">All Users</Link></li>
     }
     {
        isAdmin &&  <li><Link to="/dashboard/Manage-Products">Manage Products</Link></li>
     }
     {
        isAdmin &&  <li><Link to="/dashboard/add-tool">Add Tool</Link></li>
     }
      {
        isAdmin && <li><Link to="/dashboard/all-bookings">All Bookings</Link></li>
     }

    
     
    
    
     
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;
