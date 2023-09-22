import Navbar from "@/components/navbar/Navbar";
import React from "react";

const WithNavbarLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default WithNavbarLayout;
