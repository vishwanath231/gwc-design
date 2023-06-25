import React from 'react';
import Google from '../assets/Google_Cloud_Partner.jpg';
import Walk from '../assets/output-onlinegiftools.gif';


const GooglePartner = () => {
    return (
        <div className="mt-20" 
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="150"
        >
            <img src={Walk} alt=""  className='w-20'/>
            <div className='border rounded shadow-sm p-6 mx-5  bg-white'>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
                    <div className="">
                        <div className="text-[#3A75F5] mb-6 text-lg font-medium">Google Cloud Partner</div>
                        <div className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl ">Unlock the real benefits of Google Cloud with GWC.</div>
                        <p className='mt-9 text-lg'>We empower businesses with solutions on Google Cloud to drive innovation and cloud transformation, at scale.</p>
                        <div className="flex items-center mt-9">
                            <button className='bg-[#3A75F5] p-3 rounded-md text-white mr-5'>Learn More</button>
                            <button className='border-2 border-[#3A75F5] p-2 rounded-md bg-gray-100 hover:bg-[#3A75F5] hover:text-white'>GCP Credit?</button>
                        </div>
                    </div>
                    <div className="">
                        <img src={Google} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default GooglePartner;