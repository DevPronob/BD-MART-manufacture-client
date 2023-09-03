import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import BannerSection from './Components/Home/BannerSection/BannerSection';
import Navbar from './Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import About from './Components/About/About';
import ToolsDetails from './Components/ToolsDetails/ToolsDetails';
import ToolList from './Components/ToolLIst/ToolList';
import PrivateAuth from './Components/PrivateAuth/PrivateAuth';
import Dashboard from './Components/Dashboard/Dashboard';
import Bookings from './Components/Dashboard/Bookings';
import AllUSers from './Components/Dashboard/AllUSers';
import AddTool from './Components/Dashboard/AddTool';
import AdddReview from './Components/Dashboard/AdddReview';
import AllBookings from './Components/Dashboard/AllBookings';
import Payment from './Components/Dashboard/Payment/Payment';
import ManageProducts from './Components/Dashboard/ManageProducts';
import Contact from './Components/Contact/Contact';

function App() {
  return (
  <>
  <Navbar></Navbar>
  {/* lg:px-32 px-8 text-center */}
    <div className="">
     <Routes>
        <Route path="/" element={ <Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signUp" element={<Register></Register>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/tools" element={<PrivateAuth><ToolList></ToolList></PrivateAuth>} />
        <Route path="/tool/:id" element={<PrivateAuth><ToolsDetails></ToolsDetails></PrivateAuth>} />
        <Route path="dashboard/payment/:id" element={<Payment></Payment>} />
        <Route path="/dashboard" element={<PrivateAuth><Dashboard></Dashboard></PrivateAuth>}>
        

        <Route index element ={<Bookings></Bookings>}></Route>
            <Route path="users" element={<AllUSers></AllUSers>}></Route>
            <Route path="add-tool" element={<AddTool></AddTool>}></Route>   
            <Route path="add-review" element={<AdddReview></AdddReview>}></Route> 
            <Route path="all-bookings" element={<AllBookings></AllBookings>}></Route> 
            <Route path="Manage-Products" element={<ManageProducts></ManageProducts>}></Route> 
            

        </Route>

          {/* <Route  path="/dashboard" element={
        
            <Dashboard></Dashboard>
       
         }> */}
          
             
      </Routes>
    </div>
    </>
  );
}

export default App;
