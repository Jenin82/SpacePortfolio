import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
    return (
        <div className="relative h-full w-full">
            <video
                autoPlay
                muted
                loop
                className="rotate-100 absolute md:top-[-240px] lg:top-[-340px] top-[-400px] left-0 z-[0] w-full h-full object-cover"
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video>
            <HeroContent />
        </div>
    );
};

export default Hero;
