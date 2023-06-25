import React from 'react';
import CountUp from 'react-countup';
import Clients from '../assets/clients.png';
import Projects from '../assets/project.png';
import Employees from '../assets/employee.png';
import Solutions from '../assets/solutions.png';

const Counter = () => {
    return (
        <div className=" w-full p-10 mt-20 text-center">
                <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                    <div className="bg-white border rounded p-4 text-center"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    >
                        <div className="flex justify-center">
                            <img src={Clients} alt="" className='w-20' />
                        </div>
                        <h2 className='text-[#3A75F5] text-4xl font-bold my-4'><CountUp end={20} />+</h2>
                        <p className='text-lg font-medium'>Happy Clients</p>
                    </div>
                    <div className="bg-white border rounded p-4 text-center"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    >
                        <div className="flex justify-center">
                            <img src={Projects} alt="" className='w-20' />
                        </div>
                        <h2 className='text-[#3A75F5] text-4xl font-bold my-4'><CountUp end={500} />+</h2>
                        <p className='text-lg font-medium'>Completed Projects</p>
                    </div>
                    <div className="bg-white border rounded p-4 text-center"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="150"
                    >
                        <div className="flex justify-center">
                            <img src={Employees} alt="" className='w-20' />
                        </div>
                        <h2 className='text-[#3A75F5] text-4xl font-bold my-4'><CountUp end={120} />+</h2>
                        <p className='text-lg font-medium'>Employees</p>
                    </div>
                    <div className="bg-white border rounded p-4 text-center"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="200"
                    >
                        <div className="flex justify-center">
                            <img src={Solutions} alt="" className='w-20' />
                        </div>
                        <h2 className='text-[#3A75F5] text-4xl font-bold my-4'><CountUp end={30} />+</h2>
                        <p className='text-lg font-medium'>Solutons Provided</p>
                    </div>
                </div>
        </div>
        
    )
}

export default Counter;