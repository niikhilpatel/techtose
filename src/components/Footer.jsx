import React from 'react'

const Footer = () => {
    return (
        <section>
            <div className='h-screen text-white bg-linear-to-r from-purple-500 to-black'>
                <div className='flex justify-between px-10 pt-15 '>

                    <div className='flex-2 gap-5'>
                        <div><img src='https://framerusercontent.com/images/YMYOKQDgWbBhP1spVHDyWbEfJM.png' className='w-20' /></div>
                        
                        <div>Follow Us</div>
                        <div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className='flex-3 flex item-center gap-10 text-2xl'>
                        <div className=''>
                            <h2>Quick Links</h2>
                            <ul>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>About Us</a></li>
                                <li><a href='#'>Contact Us</a></li>
                                <li><a href='#'>Blogs</a></li>
                                <li><a href='#'>Videos</a></li>
                                <li><a href='#'>Case Studies</a></li>

                            </ul>
                        </div>
                        <div>
                            <h2>Our services</h2>
                            <ul>
                                <li><a href='#'>Explore AI</a></li>
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
                    contact@techtose.com
                </div>
            </div>
        </section>
    )
}

export default Footer