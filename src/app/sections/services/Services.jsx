import React from "react";
import SingleService from "./SingleService";
import SectionHeading from "./../../../components/section/SectionHeading";
import cardImg from "../../../assets/service1.png";
import cardImg2 from "../../../assets/service2.png";
import cardImg3 from "../../../assets/service3.png";
import cardImg4 from "../../../assets/service4.png";
const Services = () => {
    return (
        <section id="services" className="mt-28 mb-32">
            <div className="container mx-auto">
                <div className="section-heading text-center">
                    <SectionHeading
                        subheading={"category"}
                        heading={"We Offer Best Services"}
                    ></SectionHeading>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-16 mt-8">
                    <SingleService
                        img={cardImg}
                        title={"Guided tour"}
                        des={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        }
                    ></SingleService>
                    <SingleService
                        img={cardImg2}
                        title={"Best flight options"}
                        des={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        }
                    ></SingleService>
                    <SingleService
                        img={cardImg3}
                        title={"Religious tour"}
                        des={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        }
                    ></SingleService>
                    <SingleService
                        img={cardImg4}
                        title={"Medical insurance"}
                        des={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        }
                    ></SingleService>
                </div>
            </div>
        </section>
    );
};

export default Services;
