"use client";

import React, { useEffect, useState } from "react";
import { poppins } from "@/app/fonts";
import NavLink from "../navlink/Navlink";
import Image from "next/image";
import arrow from "../../assets/arrow.png";
import useScroll from "@/app/hooks/useScroll";

const navLinks = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/services", title: "Services" },
    { path: "/upcoming-packages", title: "Upcoming Packages" },
];

const Navbar = () => {
    const [navbarFixed, setNavbarFixed] = useState(false);
    const { height } = useScroll();

    useEffect(() => {
        if (height > 200) {
            setNavbarFixed(true);
        }
        if (height < 200) {
            setNavbarFixed(false);
        }
    }, [height]);

    return (
        <nav
            className={
                navbarFixed
                    ? "top-0 fixed w-full bg-[#5b7ea030] backdrop-blur-sm shadow-none duration-200 transition-all z-50"
                    : "lg:top-[66px] fixed w-full bg-transparent shadow-none duration-200 transition-all"
            }
        >
            <div className="w-full h-[90px] container mx-auto flex items-center justify-between">
                <div className="logo relative">
                    <h1 className="text-3xl font-semibold text-primary">
                        Explore
                    </h1>

                    <Image
                        src={arrow}
                        alt="arrow photo"
                        className="absolute -right-4 -bottom-7"
                    ></Image>
                </div>
                <ul className="flex items-center justify-center text-primary">
                    {navLinks.map(({ path, title }) => (
                        <li
                            key={path}
                            className={poppins.className + " " + "mx-[25px]"}
                        >
                            <NavLink
                                exact={path === "/"}
                                activeClassName={
                                    "relative after:absolute after:w-full after:bg-accent after:h-[3px] after:left-0 after:-bottom-2"
                                }
                                href={path}
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="nav-button">
                    <button
                        className={`${poppins.className} py-[18px] bg-accent rounded-lg text-primary px-[26px] text-base 
            `}
                    >
                        Get in touch
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
