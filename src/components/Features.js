import React from 'react';
import Problem from '../assets/idea.png';
import Build from '../assets/design.png';
import Preparation from '../assets/checklist.png';
import Experience from '../assets/experience.png';
import Analyzed from '../assets/interpretation.png';
import Deploy from '../assets/rocket.png';

const Features = () => {
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="mb-10 mb-16">
                <div>
                    <p class="text-[#3A75F5] inline-block py-px mb-4 text-lg font-semibold tracking-wider  uppercase rounded-full">
                        FEATURES
                    </p>
                </div>
                <h2 class="mb-7 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    Build A Powerful Analytic Approach
                </h2>
                <p class="text-base text-gray-700 md:text-lg">
                    We build strategic data analytics platforms helping businesses gain value from their data assets and extend their capabilities to truly data-driven decision making.
                </p>
            </div>
            <div class="grid gap-8 row-gap-10 lg:grid-cols-2">
                <div class="p-5 border rounded shadow-sm bg-white  hover:border-b-4  hover:border-[#3A75F5] hover:border-t-0 hover:border-x-0">
                    <div class="flex items-center justify-center w-16 h-16 -mt-8 -ml-8 rounded-full shadow-xl bg-[#3A75F5]">
                        <img src={Problem} className='w-12' alt="" />
                    </div>
                    <h6 class="mb-3 text-xl font-bold leading-5 mt-4">Problem</h6>
                    <p class="mb-3 text-sm text-gray-900">
                        Getting to define a problem is presumably one of the most intricate and vigorously dismissed stages in the data analytics pipeline. This stage required rigorous analysis and understanding of the market. Tools and techniques combined to get the best ideas that work into action.
                    </p>
                    <a href="/" aria-label="" class="text-[#3A75F5] inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
                </div>
                <div class="p-5 border rounded shadow-sm bg-white  hover:border-b-4  hover:border-[#3A75F5] hover:border-t-0 hover:border-x-0">
                    <div class="flex items-center justify-center w-16 h-16 -mt-8 -ml-8 rounded-full shadow-xl bg-[#3A75F5]">
                        <img src={Build} className='w-10' alt="" />

                    </div>
                    <h6 class="mb-3 text-xl font-bold leading-5 mt-4">Build</h6>
                    <p class="mb-3 text-sm text-gray-900">
                        A business dashboard offers at-a-glance insights based on key performance indicators (KPIs) and is an intuitive and visually pleasing way to consume data. We believe the goal of each interactive dashboard you create should be better, faster, and stronger decision making while telling a story.
                    </p>
                    <a href="/" aria-label="" class="text-[#3A75F5] inline-flex items-center font-semibold transition-colors duration-200  hover:text-deep-purple-800">Learn more</a>
                </div>
                <div class="p-5 border rounded shadow-sm bg-white  hover:border-b-4  hover:border-[#3A75F5] hover:border-t-0 hover:border-x-0">
                    <div class="flex items-center justify-center w-16 h-16 -mt-8 -ml-8 rounded-full shadow-xl bg-[#3A75F5]">
                        <img src={Preparation} className='w-10' alt="" />

                    </div>
                    <h6 class="mb-3 text-xl font-bold leading-5 mt-4">Preparation</h6>
                    <p class="mb-3 text-sm text-gray-900">
                        Data preparation is the process of gathering, combining, structuring and organizing data so it can be used in business intelligence (BI), analytics and data visualization applications. The components of data preparation include data preprocessing, profiling, cleansing, validation and transformation.
                    </p>
                    <a href="/" aria-label="" class="text-[#3A75F5] inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
                </div>
                <div class="p-5 border rounded shadow-sm bg-white hover:border-b-4  hover:border-[#3A75F5] hover:border-t-0 hover:border-x-0">
                    <div class="flex items-center justify-center w-16 h-16 -mt-8 -ml-8 rounded-full shadow-xl bg-[#3A75F5]">
                        <img src={Experience} className='w-10' alt="" />
                    </div>
                    <h6 class="mb-3 text-xl font-bold leading-5 mt-4">Experience</h6>
                    <p class="mb-3 text-sm text-gray-900">
                        The dashboard design process starts with defining our stakeholders and determining what decisions they need to make; we then determine what metrics would support those decisions. Next, we prototype dashboards with pen and paper, get feedback, and iterate.
                    </p>
                    <a href="/" aria-label="" class="text-[#3A75F5] inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
                </div>
                <div class="p-5 border rounded shadow-sm bg-white hover:border-b-4  hover:border-[#3A75F5] hover:border-t-0 hover:border-x-0">
                    <div class="flex items-center justify-center w-16 h-16 -mt-8 -ml-8 rounded-full shadow-xl bg-[#3A75F5]">
                        <img src={Analyzed} className='w-10' alt="" />
                    </div>
                    <h6 class="mb-3 text-xl font-bold leading-5 mt-4">Analyzed</h6>
                    <p class="mb-3 text-sm text-gray-900">
                        In Depth understanding of data makes an ease move to take right decisions Prior design a solution. This stage involves detailed examination of complex data to find solutions to various problems and make concrete decisions with action plans to solve any problems
                    </p>
                    <a href="/" aria-label="" class="text-[#3A75F5] inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
                </div>
                <div class="p-5 border rounded shadow-sm bg-white  hover:border-b-4  hover:border-[#3A75F5] hover:border-t-0 hover:border-x-0">
                    <div class="flex items-center justify-center w-16 h-16 -mt-8 -ml-8 rounded-full shadow-xl bg-[#3A75F5]">
                        <img src={Deploy} className='w-10' alt="" />
                    </div>
                    <h6 class="mb-3 text-xl font-bold leading-5 mt-4">Deploy</h6>
                    <p class="mb-3 text-sm text-gray-900">
                        Once the dashboard has been built and tested, it is then deployed into production and security requirements are implemented. With the dashboard in production or "live," steps must also be taken to provide for ongoing maintenance.
                    </p>
                    <a href="/" aria-label="" class="text-[#3A75F5] inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default Features;



{/* <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <div>
        <p class="text-[#3A75F5] inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider  uppercase rounded-full">
            FEATURES
        </p>
    </div>
    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
            <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                <defs>
                    <pattern id="ea469ae8-e6ec-4aca-8875-fc402da4d16e" x="0" y="0" width=".135" height=".30">
                        <circle cx="1" cy="1" r=".7"></circle>
                    </pattern>
                </defs>
                <rect fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)" width="52" height="24"></rect>
            </svg>
        </span>
        Build A Powerful Analytic Approach
    </h2>
    <p class="text-base text-gray-700 md:text-lg">
        We build strategic data analytics platforms helping businesses gain value from their data assets and extend their capabilities to truly data-driven decision making.
    </p>
</div> */}