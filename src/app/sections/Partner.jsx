import Image from "next/image";
import React from "react";
import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";
import partner4 from "../../assets/partner4.png";
import partner5 from "../../assets/partner5.png";
const Partner = () => {
    return (
        <section className="bg-[#F7F7F7] py-[75px]">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-between">
                    <div className="partner w-[150px] h-[50px]">
                        <Image
                            src={partner1}
                            alt="Partner1"
                            className="w-full"
                        ></Image>
                    </div>
                    <div className="partner w-[150px] h-[50px]">
                        <Image
                            src={partner2}
                            alt="Partner2"
                            className="w-full"
                        ></Image>
                    </div>
                    <div className="partner w-[150px] h-[50px]">
                        <Image
                            src={partner3}
                            alt="Partner3"
                            className="w-full"
                        ></Image>
                    </div>
                    <div className="partner w-[150px] h-[50px]">
                        <Image
                            src={partner4}
                            alt="Partner4"
                            className="w-full"
                        ></Image>
                    </div>
                    <div className="partner w-[150px] h-[50px]">
                        <Image
                            src={partner5}
                            alt="Partner5"
                            className="w-full"
                        ></Image>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partner;
