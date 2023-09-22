import Image from "next/image";
import React from "react";
import { poppins } from "../fonts";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import effect from "../../assets/heading-vector.png";

const Hero = () => {
    return (
        <section className="hero bg-heroBg bg-cover bg-center bg-no-repeat lg:h-[976px] w-full">
            <div className="container mx-auto h-full">
                <div className="hero flex items-center h-full">
                    <div className="hero-content grid grid-cols-4">
                        <h1
                            className={
                                poppins.className +
                                " col-span-2 lg:text-6xl font-bold text-primary leading-10 relative"
                            }
                        >
                            No matter where you&apos;re going to, we&apos;ll
                            take you there
                            <Image
                                src={effect}
                                alt="Heading Vec Effect"
                                className="absolute -top-3 left-0"
                            ></Image>
                        </h1>
                        <div className="options col-span-3 mt-7 py-10 px-8 bg-primary bg-opacity-60 backdrop-blur-md rounded-md">
                            <div className="flex justify-between items-center">
                                <ul
                                    className={
                                        poppins.className +
                                        " flex text-lg text-primary gap-[100px] "
                                    }
                                >
                                    <li className=" relative after:absolute after:w-[3px] after:h-full after:top-0 after:-right-[50px] after:bg-[#D0D0D0]">
                                        Where to?
                                    </li>
                                    <li className="flex items-center gap-2 relative after:absolute after:w-[3px] after:h-full after:top-0 after:-right-[50px] after:bg-[#D0D0D0]">
                                        Travel Type
                                        <MdOutlineKeyboardArrowDown className="text-2xl"></MdOutlineKeyboardArrowDown>
                                    </li>
                                    <li className="flex items-center gap-2 ">
                                        Duration
                                        <MdOutlineKeyboardArrowDown className="text-2xl"></MdOutlineKeyboardArrowDown>
                                    </li>
                                </ul>
                                <button
                                    className={`${poppins.className} py-4 bg-accent rounded-lg text-primary px-14 text-base 
            `}
                                >
                                    <span>Submit</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
