import React from 'react'
import Video from "../assets/header video.webm"

const Navbar = () => {
    return (

        <header>
            <nav className='absolute'>
                <div className='flex justify-between fixed top-0 right-0 left-0 p-7 px-10'>

                    <div><img src='https://framerusercontent.com/images/YMYOKQDgWbBhP1spVHDyWbEfJM.png' className='w-10' /></div>
                    <div className='flex text-white gap-10'>

                        <div className='font-semibold -3xl text-linear-to-r from-red-500 to-blue-500'>EXPLORE AI</div>
                        <div className=''>Latest Insights</div>
                        <div>=</div>
                    </div>
                </div>
            </nav>
        </header >

    )
}

export default Navbar