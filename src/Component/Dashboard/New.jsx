import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <button className="bg-white absolute top-[30%] text-gray-400 xl:-left-5 lg:left-3 z-50 rounded-full h-10 w-10 p-3 lg:flex hidden" onClick={onClick}  >
            <IoIosArrowBack />
        </button>
    );
}

// Custom Right Arrow
function NextArrow(props) {
    const { onClick } = props;
    return (
        <button className="bg-white absolute top-[30%] xl:right-20 lg:right-36 rounded-full text-gray-400  h-10 w-10 p-3 lg:flex hidden" onClick={onClick}  >
            <IoIosArrowForward />
        </button>
    );
}
function New() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                   infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };
    return (
        <div className="slider-container pt-8 pl-6 !gap-5 text-gray-500">
            <Slider {...settings} className="">
                <div className="flex flex-col bg-gray-100 rounded-xl xl:!w-[70%] lg:!w-[80%] !w-[70%] p-4">
                    <div className="text-xl"><FaRegEnvelope /></div>
                    <div className="text-xl font-bold py-2">00</div>
                    <div>Accepted Interest</div>
                </div>
                <div className="flex flex-col bg-gray-100 rounded-xl xl:!w-[70%] lg:!w-[80%] !w-[70%]  p-4">
                    <div className="text-xl"><FaRegEnvelope /></div>
                    <div className="text-xl font-bold py-2">00</div>
                    <div>Interests Received</div>
                </div>
                <div className="flex flex-col bg-gray-100 rounded-xl xl:!w-[70%] lg:!w-[80%] !w-[70%]  p-4">
                    <div className="text-xl"><FaRegEnvelope /></div>
                    <div className="text-xl font-bold py-2">00</div>
                    <div>Interests Sent</div>
                </div>
                <div className="flex flex-col bg-gray-100 rounded-xl xl:!w-[70%] lg:!w-[80%] !w-[70%]  p-4">
                    <div className="text-xl"><FaRegEnvelope /></div>
                    <div className="text-xl font-bold py-2">00</div>
                    <div>Shortlisted Profiles</div>
                </div>
                <div className="flex flex-col bg-gray-100 rounded-xl xl:!w-[70%] lg:!w-[80%] !w-[70%]  p-4">
                    <div className="text-xl"><FaRegEnvelope /></div>
                    <div className="text-xl font-bold py-2">00</div>
                    <div>Decline Interests</div>
                </div>
                <div className="flex flex-col bg-gray-100 rounded-xl xl:!w-[70%] lg:!w-[80%] !w-[70%]  p-4">
                    <div className="text-xl"><FaRegEnvelope /></div>
                    <div className="text-xl font-bold py-2">00</div>
                    <div>Filtered Interests</div>
                </div>
            </Slider>
        </div>

       
       
    );
}

export default New;