import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Img1 from "../assets/review1.png"
import Img2 from "../assets/review2.png"
import Img3 from "../assets/review3.png"
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>

            <div className='h-auto text-white bg-linear-to-r from-purple-800 to-black'>
                <div className='flex flex-col lg:flex'>

                    <div className='md:flex justify-between items-center px-10 pt-15 '>

                        <div className='flex-2 flex md:flex-col gap-4 md:gap-10 md:m-5 pb-5'>
                            <div><img src='https://framerusercontent.com/images/YMYOKQDgWbBhP1spVHDyWbEfJM.png' className='md:w-20 w-15' /></div>

                            <div className='font-semibold md:text-xl'>Follow Us</div>
                            <div className='flex gap-5 text-xl md:text-2xl'>
                                <FaLinkedin />
                                <FaTwitter />
                                <FaYoutube />
                            </div>
                        </div>
                        <div className='flex-3 flex item-center gap-20 md:text-xl'>
                            <div className=''>
                                <h2 className='mb-5'>Quick Links</h2>
                                <ul className='flex flex-col gap-2'>
                                    <li><a href='#'>Home</a></li>
                                    <li><a href='#'>About Us</a></li>
                                    <li><a href='#'>Contact Us</a></li>
                                    <li><a href='#'>Blogs</a></li>
                                    <li><a href='#'>Videos</a></li>
                                    <li><a href='#'>Case Studies</a></li>

                                </ul>
                            </div>
                            <div>
                                <h2 className='mb-5'>Our services</h2>
                                <ul className='flex flex-col gap-2'>
                                    <li className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500'><a href='#'>Explore AI</a></li>
                                    <li><a href='#'>Software Development</a></li>
                                    <li><a href='#'>Digital Marketing</a></li>
                                    <li><a href='#'>Web 3 Development</a></li>
                                    <li><a href='#'>Metaverse Development</a></li>
                                    <li><a href='#'>Blockchain Development</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className='font-semibold text-2xl md:text-5xl p-10'>
                            <h1 className='bg-gradient-to-r from-orange-500 via-purple-500 to-blue-600 text-transparent bg-clip-text'>
                                contact@techtose.com
                            </h1>
                        </div>
                        <div>
                            <ul className='flex justify-center items-center gap-2 md:gap-10 p-3 md:p-10'>
                                <li><img src='https://framerusercontent.com/images/kErQNZcUibfNGGempZOdLA4Rg.png' /></li>
                                <li><img src={Img1} /></li>
                                <li><img src={Img2} /></li>
                                <li><img src={Img3} /></li>
                                <li><img src='https://framerusercontent.com/images/werwEYITNdqw7ZqUe0RvG9gOk.png' /></li>
                                <li><img src='https://framerusercontent.com/images/88Rc7BSsZR83SLsgvgT2J4jRJ0.png?scale-down-to=512' className='w-35' /></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col md:flex-row  justify-between md:text-xl items-center py-8 px-5 gap-5'>
                    <div className='flex justify-center items-center'>Copyright <span><FaRegCopyright /></span> 2025 TechTose. All Right Reserve </div>
                    <div className='flex gap-5'>
                        <h1>Privacy & Policy</h1>
                        <h1>|</h1>
                        <h1>Terms & Conditions</h1>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer