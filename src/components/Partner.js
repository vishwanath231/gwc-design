import React from 'react';
import Snowflake from '../assets/Snowflake.jpg';
import Domo from '../assets/DOMO-e1673199670734.jpg';
import Zoho from '../assets/Zoho.jpg';

const Partner = () => {
    return (
        <div className='my-5'>
            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="mb-10 mb-16">
                    <div>
                        <p class="text-[#3A75F5] inline-block py-px mb-4 text-lg font-semibold tracking-wider uppercase rounded-full">
                            Partner
                        </p>
                    </div>
                    <h2 class="mb-8 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        Who Are With Us?
                    </h2>
                    <p class="text-base text-gray-700 md:text-lg">
                        We share our reputation as an integral part of our operations and growth. GWC has a dedicated process in place to manage and nurture these partnerships, and it strives to maintain open and transparent communication with its partners to ensure that the partnership is mutually beneficial.
                    </p>
                </div>
                <div class="grid gap-4 row-gap-5 sm:grid-cols-1 lg:grid-cols-3">
                    <div class="flex flex-col justify-between p-5 border-b-4 border-[#3A75F5] rounded shadow-sm bg-white"
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                    >
                        <div>
                            <div class="">
                                <img src={Snowflake} alt="" className='w-full' />
                            </div>
                            <h6 class="mb-2 font-bold font-sans text-xl leading-5">Snowflake</h6>
                            <p class="mb-3 text-gray-900">
                                Empower midmarket customers to modernize their data platform by mobilizing data seamlessly, execute diverse analytic workloads, and accelerate data-driven decision making. Our aim is to provision them with a seamless access to unlock, share, eradicate data silos and Unleash the real value of their organization data.
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between p-5 border-b-4 border-[#3A75F5] rounded shadow-sm bg-white"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="100"
                    >
                        <div>
                            <div class="py-8">
                                <img src={Domo} alt="" className='w-full' />
                            </div>
                            <h6 class="mb-2 font-bold font-sans text-xl leading-5">DOMO</h6>
                            <p class="mb-3 text-gray-900">
                                Being a Technology partner for trusted name in the crowded BI sector for brands who look for a progressive way to change how they manage their business and digital transformations. That provides a one-stop business solution to empower your management and employees with data-driven directives by leveraging information in the right way, then DOMO is the first choice.
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between p-5 border-b-4 border-[#3A75F5] rounded shadow-sm bg-white"
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                    >
                        <div>
                            <div class="py-6">
                                <img src={Zoho} alt="" className='w-full' />
                            </div>
                            <h6 class="mb-2 font-bold font-sans text-xl leading-5">Zoho Analytics</h6>
                            <p class="mb-3 text-gray-900">
                                As Authorized Implementation Partner for Zoho Analytics that enables you to analyze data from a wide variety of data sources through easy-to-use data connectors. Zoho Analytics provides powerful options to model and prepare your data. This enables you to structure, transform & clean your data set for effective and easy analysis & reporting.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partner;