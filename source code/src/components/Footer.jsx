import React from 'react'

const Footer = () => {
    return (
        <div className='bg-lime-800 text-white flex flex-col justify-center items-center  w-full'>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-lime-500'> &lt;</span>
                <span>Pass</span><span className='text-lime-500'>DM/&gt;</span>
            </div>
            <div className='flex justify-center items-center'>&copy; 2024 | All Rights Reserved</div>
        </div>
    )
}

export default Footer