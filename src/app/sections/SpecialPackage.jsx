import React from "react";
import honeymoonImg from "../../assets/honymoon-img.png";
import Image from "next/image";
import SectionHeading from "./../../components/section/SectionHeading";
import { poppins } from "../fonts";
import effect from "../../assets/bg-element.png";
import effectImg1 from "../../assets/effect_img1.png";
import effectImg2 from "../../assets/effect_img2.png";
const SpecialPackage = () => {
    return (
        <section id="special-package">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="left-section">
                        <div className="img">
                            <div className="image-container mx-11 rounded-t-full relative">
                                <Image
                                    src={honeymoonImg}
                                    alt="Honeymoon Image"
                                    className="rounded-t-full "
                                ></Image>
                                <div className="effect absolute -bottom-10 -right-1 -z-10">
                                    <Image src={effect} alt="Effect"></Image>
                                </div>
                                <div className="effectImg1 absolute top-0 left-0">
                                    <Image
                                        src={effectImg1}
                                        alt="Effect"
                                    ></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-section flex flex-col justify-center">
                        <div className="section-heading text-left">
                            <SectionHeading
                                heading={"Our Romantic Tropical Destinations"}
                                subheading={"honeymoon specials"}
                            ></SectionHeading>
                        </div>
                        <div className="details mt-5 ">
                            <p className={poppins.className}>
                                Et labore harum non nobis ipsum eum molestias
                                mollitia et corporis praesentium a laudantium
                                internos. Non quis eius quo eligendi corrupti et
                                fugiat nulla qui soluta recusandae in maxime
                                quasi aut ducimus illum aut optio quibusdam!
                            </p>
                        </div>
                        <div className="action-btn mt-8">
                            <button
                                className={`${poppins.className} px-5 py-3 rounded-md bg-accent text-primary`}
                            >
                                View Packages
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialPackage;
