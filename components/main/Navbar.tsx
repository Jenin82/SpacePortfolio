import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 max-w-[1855px] items-center rounded-full">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[0px] md:px-[10px]">
                <a
                    href="#about-me"
                    className="h-auto w-auto flex flex-row items-center"
                >
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={50}
                        height={50}
                        className="cursor-pointer hover:animate-slowspin w-10"
                    />

                    <span className="font-bold ml-[10px] block text-gray-300 z-50 md:text-lg text-xl">
                        Jenin Joseph
                    </span>
                </a>

                <div className="hidden w-3/6 lg:w-1/3 h-full md:flex flex-row items-center justify-between md:mx-auto lg:pr-12">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <a href="#skills" className="cursor-pointer">
                            Skills
                        </a>
                        <a href="#about-me" className="cursor-pointer">
                            About me
                        </a>
                        <a href="#projects" className="cursor-pointer">
                            Projects
                        </a>
                    </div>
                </div>

                <div className="flex flex-row gap-5 text-white">
                    {Socials.map((social) => (
                        <a
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={social.src}
                                alt={social.name}
                                key={social.name}
                                width={24}
                                height={24}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;