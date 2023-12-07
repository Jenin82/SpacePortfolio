"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { BsStars } from "react-icons/bs";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex md:flex-row flex-col-reverse items-center justify-center gap-10 md:gap-0 md:px-20 px-5 mt-40 w-full z-20"
        >
            <div className="h-full w-full md:w-3/6 flex flex-col gap-5 justify-center text-start">
                <div className="hidden md:flex flex-row items-center md:gap-5 gap-1">
                    <motion.div
                        variants={slideInFromTop}
                        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                    >
                        <BsStars className="text-[#b49bff] mr-[10px] h-5 w-5" />
                        <h1 className="Welcome-text text-[13px]">
                            Fullstack Developer
                        </h1>
                    </motion.div>

                    <motion.div
                        variants={slideInFromTop}
                        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                    >
                        <BsStars className="text-[#b49bff] mr-[10px] h-5 w-5" />
                        <h1 className="Welcome-text text-[13px]">
                            Tech Innovator
                        </h1>
                    </motion.div>

                    <motion.div
                        variants={slideInFromTop}
                        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                    >
                        <BsStars className="text-[#b49bff] mr-[10px] h-5 w-5" />
                        <h1 className="Welcome-text text-[13px]">Team Lead</h1>
                    </motion.div>
                </div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 md:text-5xl text-4xl font-bold text-white max-w-[600px] w-auto h-auto z-20"
                >
                    <span>
                        Coding
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            Dreams{" "}
                        </span>
                        into
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            Reality{" "}
                        </span>
                        one line at a time
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-md text-gray-400 my-5 max-w-[650px] text-justify z-30"
                >
                    I&apos;m a passionate Full Stack Developer skilled in React,
                    TypeScript, Django, REST, HTML, and CSS, committed to
                    creating seamless, user-centric web applications. With
                    diverse roles ranging from MuLearn Intern to CEO at SNGIST
                    IEDC, I lead digital transformation and innovation
                    initiatives. As a team lead and CEO, I inspire teams and
                    drive entrepreneurial spirit, fostering a culture of
                    creativity and excellence.
                </motion.p>
                <motion.a
					href="#about"
                    variants={slideInFromLeft(1)}
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] z-40"
                >
                    Learn More!
                </motion.a>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full md:w-3/6 h-full flex justify-center items-center z-40"
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;