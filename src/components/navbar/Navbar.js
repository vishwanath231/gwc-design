import React, { useEffect, useState } from 'react';
import './navbar.css';
import LOGO_LIGHT from '../../assets/logo_light.png';
import LOGO_DARK from '../../assets/logo.png';
import { BsFillCaretDownFill, BsFillCaretRightFill } from 'react-icons/bs';

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    const handelScroll = () => {

        const offset = window.scrollY;
        if (offset > 20) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', handelScroll);
    }, [])




    return (
        <nav className={scrolled ? 'navbar_container_light' : 'navbar_container'} >
            <div className="max-w-screen-xl mx-auto my-0 ">
               <div className="flex justify-between items-center">
                    <div className="">
                        {
                            scrolled ? 
                            <img src={LOGO_DARK} alt="" className='w-24' />:
                            <img src={LOGO_LIGHT} alt="" className='w-24' />
                        }
                    </div>
                    <div className="">
                        <ul className='flex items-center'>
                            <li className={scrolled ? 'flex items-center mr-6 cursor-pointer py-2 px-5 hover:bg-[#3A74F5] hover:text-white text-black hover:shadow' :  'flex items-center mr-6 cursor-pointer py-2 px-5 hover:bg-white hover:text-black text-white hover:shadow' }>Home</li>
                            <li className={scrolled ? 'flex items-center mr-6 cursor-pointer about_nav py-2 px-5 hover:bg-[#3A74F5] hover:text-white text-black hover:shadow' : 'flex items-center mr-6 cursor-pointer about_nav py-2 px-5 hover:bg-white hover:text-black text-white hover:shadow'}>About <BsFillCaretDownFill className='caret_down' />
                                <div className="about_dropdown text-black">
                                    <ul>
                                        <li className='flex items-center p-3 hover:bg-[#3A74F5] hover:text-white'>Applications Capabilities <BsFillCaretRightFill className='caret_right' /> </li>
                                        <li className='p-3 hover:bg-[#3A74F5] hover:text-white'>Industries</li>
                                        <li className='p-3 hover:bg-[#3A74F5] hover:text-white'>Partner</li>
                                        <li className='p-3 hover:bg-[#3A74F5] hover:text-white'>Our Team</li>
                                        <li className='p-3 hover:bg-[#3A74F5] hover:text-white'>Life at GWC</li>
                                    </ul>
                                </div>
                            </li>
                            <li className={scrolled ? 'flex items-center mr-6 cursor-pointer py-2 px-5 hover:bg-[#3A74F5] hover:text-white text-black hover:shadow' :  'flex items-center mr-6 cursor-pointer py-2 px-5 hover:bg-white hover:text-black text-white hover:shadow' }>GCP</li>
                            <li className={scrolled ? 'flex items-center mr-6 cursor-pointer py-2 px-5 hover:bg-[#3A74F5] hover:text-white text-black hover:shadow' :  'flex items-center mr-6 cursor-pointer py-2 px-5 hover:bg-white hover:text-black text-white hover:shadow' }>Domo</li>
                            <li className={scrolled ? 'flex items-center mr-6 cursor-pointer py-2 px-5 hover:bg-[#3A74F5] hover:text-white text-black hover:shadow' :  'flex items-center mr-6 cursor-pointer py-2 px-5 hover:bg-white hover:text-black text-white hover:shadow' }>Salesforce</li>
                            <li className={scrolled ? 'flex items-center mr-6 cursor-pointer py-2 px-5 hover:bg-[#3A74F5] hover:text-white text-black hover:shadow ' :  'flex items-center mr-6 cursor-pointer py-2 px-5 hover:bg-white hover:text-black text-white hover:shadow' }>Resources</li>
                            <li className='flex items-center'>
                                <button className={scrolled ? 'border-2 border-[#3875F4] bg-[#3875F4] p-2 cursor-pointer hover:bg-transparent text-white hover:text-black' : 'border-2 border-[#3875F4] bg-[#3875F4] p-2 cursor-pointer hover:bg-transparent text-white'}>Let's talk</button>
                            </li>
                        </ul>
                    </div>
               </div>
            </div>
        </nav>
    )
}

export default Navbar;