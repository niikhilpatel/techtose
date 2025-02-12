import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TTExcellance = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.5, 1]); // Scale from 50% to 100%

    return (
        <section className="relative bg-black text-white py-20 flex flex-col items-center">
            {/* Background Blur Layer */}
            <div className="absolute inset-65 bg-gradient-to-r from-purple-600 via-blue-500 to-orange-500 opacity-30 blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-10 w-full">
                <div className="text-5xl font-bold text-center">
                    <h1>Unveiling the</h1>
                    <h1>Essence of <span className="text-orange-500">TechTose's Excellence</span></h1>
                </div>

                <div className="text-xl text-center w-[70%]">
                    Step into the world of TechTose and uncover our story, values, and the innovation that drives us. 
                    Watch our featured video to get an inside look at who we are and what we stand for.
                </div>

                {/* Video Container with Scroll Effect */}
                <motion.div 
                    style={{ scale }} 
                    className="relative w-[50%] max-w-[600px] transition-all duration-800"
                >
                    {/* Glassmorphism Background */}
                    <div className="absolute inset-0 backdrop-blur-lg bg-white/10 rounded-lg shadow-[0px_4px_30px_rgba(255,255,255,0.2)]"></div>
                    
                    {/* Video */}
                    <video 
                        src="https://framerusercontent.com/assets/0ogCxCpr4KwB5LUssmpwuLsrgq0.mp4" 
                        autoPlay 
                        loop 
                        muted 
                        className="relative z-10 w-full rounded-lg shadow-2xl"
                    ></video>
                </motion.div>
            </div>
        </section>
    )
}

export default TTExcellance;
