import { poppins } from "@/app/fonts";
import React from "react";
import { volkhov } from "@/app/fonts";

const SectionHeading = ({ subheading, heading }) => {
    return (
        <div>
            <p
                className={`${poppins.className} sub-heading font-semibold text-accent pb-5 text-[18px] uppercase`}
            >
                <span>{subheading}</span>
            </p>
            <h2
                className={`${volkhov.className} lg:text-5xl font-bold capitalize text-secondary`}
            >
                {heading}
            </h2>
        </div>
    );
};

export default SectionHeading;
