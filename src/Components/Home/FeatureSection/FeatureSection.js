import React from 'react'
import { PiCallBellFill } from 'react-icons/pi';
import { BiSolidMap } from 'react-icons/bi';
import { BsFillChatFill } from 'react-icons/bs';
import { CgRepeat } from 'react-icons/cg';
import './FeatureSection.css'
const FeatureSection = () => {
    const data =
    [
        {
            title:"ALWAYS BY YOUR SIDE",
            dec:"We take extensive measures to ensure all our products are made to the very We’ll repair, without highest standards and meet all relevant industry regulations.",
            icon:<PiCallBellFill />
        },
        {
            title:"FIND A LOCAL RETAILER",
            dec:"DEWALT® products and accessories are available online and at retailers nationwide.We’ll repair, without  Search for retailers near you by postcode or city.",
            icon:<BiSolidMap />
        },
        {
            title:"HOW CAN WE HELP?",
            dec:"If you want to contact us,We’ll repair, without We’ll repair, without charge, charge, now it's easier than ever to get in touch. Whatever you need, we are here for you.",
            icon:<BsFillChatFill />
        },
        {
            title:"WARRANTY INFORMATION",
            dec:"We’re confident in our products.  any defects We’ll repair, without charge, due to faulty materials in our products. or workmanship within the specified warranty.",
            icon:<CgRepeat />
        },
    ]
  return (
    <div className='lg:px-32 px-8 text-center py-12'>
     <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 flex items-center justify-center">
        {
            data.map(items =>{
                return <div className='p-4 py-12 card-item'>
                    <h1 className='text-4xl text-center'>{items.icon}</h1>
                    <h3 className='text-bold'>{items.title}</h3>
                    <p>{items.dec}</p>
                    <button className="btn btn-active btn-neutral mt-10">Learn More</button>
                </div>
            })
        }
</div>
    </div>
  )
}

export default FeatureSection
