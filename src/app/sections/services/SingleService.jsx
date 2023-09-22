import Image from "next/image";
import React from "react";

import { poppins } from "@/app/fonts";
const SingleService = ({ img, title, des }) => {
    return (
        <div className="service-card-wrap relative h-[303px] group">
            <div className="card-bg absolute rounded-[36px] bottom-0 left-0 bg-accent w-[100px] h-[100px] z-10"></div>
            <div className="card rounded-[36px] duration-300 absolute bg-primary top-0 right-0 z-20 w-full group-hover:top-[-30px] group-hover:right-[-30px] group-hover:shadow-xl">
                <div className="service-card-thumb w-[92px] mx-auto mt-5">
                    <Image src={img} alt="Card Image" className="w-full" />
                </div>
                <div className="service-card-content text-center px-8 pb-11 pt-7">
                    <h2
                        className={`${poppins.className} service-card-title capitalize font-semibold pb-3 `}
                    >
                        {title}
                    </h2>
                    <p
                        className={`${poppins.className} service-card-description text-[#5E6282] text-base leading-7 `}
                    >
                        {des}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleService;
// duration-300 rounded-[36px] hover:translate-x-6 hover:-translate-y-6 hover:shadow-2xl
