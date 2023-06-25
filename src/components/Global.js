import React from 'react'
import Google from '../assets/gwc.gif';
import { BsCheck2Circle } from 'react-icons/bs';

const Global = () => {
    return (
        <div className="mt-10">
            <div className='p-6 mx-5'>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
                    <div className=""
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="100"
                    >
                        <div className="text-[#3A75F5] inline-block py-px mb-4 text-lg font-semibold tracking-wider uppercase rounded-full">GWC</div>
                        <div className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl ">Our Top Focused Industries</div>
                        <div className='flex items-center mt-8'>
                            <ul className='mr-10'>
                                <li className='flex items-center'> <BsCheck2Circle className='text-green-600 mr-2' /> HCLS</li>
                                <li className='flex items-center my-4'> <BsCheck2Circle className='text-green-600 mr-2' /> Retail</li>
                                <li className='flex items-center'> <BsCheck2Circle className='text-green-600 mr-2' /> Manufacturing</li>
                            </ul>
                            <ul>
                                <li className='flex items-center'>  <BsCheck2Circle className='text-green-600 mr-2' /> Media & Entertainment</li>
                                <li className='flex items-center my-4'> <BsCheck2Circle className='text-green-600 mr-2' /> Supply Chain & Logistics</li>
                                <li className='flex items-center'> <BsCheck2Circle className='text-green-600 mr-2' /> And Many More</li>
                            </ul>
                        </div>
                    </div>
                    <div className="circle-shape-1"
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="100"
                    >
                        <img src={Google} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Global;