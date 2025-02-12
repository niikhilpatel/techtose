import React from "react";
import Navbar from "./Navbar";
import Video from "../assets/header video.webm";
import { motion } from "framer-motion";

const images = [
    "https://framerusercontent.com/images/NXju14ZDXfOMWTJSAJOfUqGleKA.jpg",
    "https://framerusercontent.com/images/BGiXD720C9B0AB21HbQ34UDBcU.jpg",
    "https://framerusercontent.com/images/MfnywOphWbEHBctUKBB2mNLLJkI.jpg",
    "https://framerusercontent.com/images/hR5QTdjEYfGIz7wQyshjzobk6ig.jpg",
    "https://framerusercontent.com/images/2N9eHIY409TNmir1fLLoB1c7w.jpg",
    "https://framerusercontent.com/images/24Z23gQ9VDyMd4YSxSLWZmYexhI.jpg",
    "https://framerusercontent.com/images/bJCEhgSlJUnZLtNlXHLrv5NHeq4.jpg",
    "https://framerusercontent.com/images/F8GgsgbTp7GmfTrV8wmBHkiTukg.jpg",
    "https://framerusercontent.com/images/4ZBXDYf6W4JOJdpmPlb6fVzSKc.jpg",
    "https://framerusercontent.com/images/xCOjY9bmb2cOZnsTDF13WEeOqZU.jpg",


];

const Banner = () => {
    return (
        <section className="">
            <div className="">
                {/* Background Video */}
                <div className="">
                    <video
                        src={Video}
                        autoPlay
                        loop
                        muted
                        className="absolute object-cover w-full h-auto"
                    ></video>
                </div>

                <Navbar />

                {/* Main Content */}
                <div className="relative pt-25 text-white">
                    <div className="flex flex-col justify-center items-center gap-10 ">
                        <h1 className="font-semibold text-6xl">
                            Empowering Innovation Through
                        </h1>
                        <h3 className="font-semibold text-2xl">AI Development</h3>
                        <div className="text-grey-100 tracking-[.25em]">
                            Imagine | Create | Innovate | Revolutionize
                        </div>
                        <div className="w-[60%] text-center text-lg tracking-[.05em]">
                            Elevate your business game with next-gen software solutions!
                            Connect now, transform tomorrow. Let's ignite your digital
                            revolution!
                        </div>

                        <div className="relative mt-10 w-[40%] overflow-hidden">
                            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r bg-gradient-to-l from-black via-transparent to-transparent z-10"></div>

                            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black via-transparent to-transparent z-10"></div>

                            <motion.div
                                className="flex gap-5"
                                animate={{ x: ["0%", "-100%"] }}
                                transition={{
                                    ease: "linear",
                                    duration: 10,
                                    repeat: Infinity,
                                }}
                            >
                                {[...images, ...images].map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Slide ${index}`}
                                        className="w-15 h-15 rounded-full object-cover"
                                    />
                                ))}
                            </motion.div>
                        </div>
                        <div className=" text-center text-md tracking-[.05em]">
                            Our Valuable clients
                        </div>
                        <div className="relative mb-5 rounded-4xl bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 animate-border-move">
                            <div className="font-semibold px-5 py-4 rounded-4xl bg-black text-white relative">
                                Let's Schedule a Call
                            </div>
                        </div>

                        <style>
                            {`
    @keyframes borderMove {
      0% { background-position: 0% 50%; }
      100% { background-position: 200% 50%; }
    }

    .animate-border-move {
      background-size: 200% 200%;
      animation: borderMove 3s linear infinite;
    }
  `}
                        </style>



                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
