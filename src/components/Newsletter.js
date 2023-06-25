import React from 'react'

const Newsletter = () => {
    return (
        <div className='bg-[#3A75F5] w-full p-10 text-center'>
            <div className="uppercase text-black font-bold text-xl">Subscribe</div>
            <div className="border-b-4 w-20 mx-auto border-black pt-3"></div>
            <div className="text-2xl font-bold text-white my-10">Subscribe Our newsletter to say updated every moment</div>
            <div className="max-w-md mx-auto flex items-center">
                <input type="text" placeholder='example@support.com' className='bg-white p-3 rounded w-full mr-3' />
                <button className='p-3 rounded bg-black text-white'>submit</button>
            </div>
        </div>
    )
}

export default Newsletter