import { poppins } from "@/app/fonts";
import React from "react";

const PrimaryButton = ({ children, px, py }) => {
    console.log(px, py);
    return (
        <button
            className={`py-[${py}px] ${poppins.className} bg-accent rounded-lg text-primary text-base 
            px-[${px}px]`}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
