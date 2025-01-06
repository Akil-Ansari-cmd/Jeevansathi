import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="bg-white absolute top-[30%] text-gray-400 pt-5 -left-10 z-50 h-16 w-8 pl-2 flex"  onClick={onClick}  >
    <IoIosArrowBack/>
    </button>
  );
}

// Custom Right Arrow
function NextArrow(props) {
  const {onClick } = props;
  return (
    <button className="bg-white absolute top-[30%] -right-10 text-gray-400  h-16 w-8 pl-2 pt-5 flex"  onClick={onClick}  >
    <IoIosArrowForward/>
    </button>
  );
}
function New() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
  };
  return (
    <div className="slider-container w-[100%]">
      <Slider {...settings} className="mx-10">
        <div>
          <img className="md:h-10 h-7 mt-14" src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Naukri.png"/>
        </div>
        <div className="">
          <img className="mt-16" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5fWuIeL2Qx7vR9X3zRknIXKmhlu0p8Wp4w&s'/>
        </div>
        <div>
          <img className="h-20 ml-10 mt-10" src='https://navins.in/wp-content/uploads/2018/05/99acres_logo-min-1200x900.png'/>
        </div>
        <div>
          <img className="h-20 mt-10" src='https://upload.wikimedia.org/wikipedia/commons/0/06/SHIKSHA-Large.png'/>
        </div>
        <div>
         <img className="h-10 mt-14"  src='https://www.dsim.in/blog/wp-content/uploads/2016/05/Mydala.png'/>
        </div>
        <div>
          <img src='https://static.wixstatic.com/media/2b31b0_e1bfaa77394d4f0a87dfa308539adc6c~mv2.png/v1/fill/w_462,h_462,al_c/Frame%2022.png'/>
        </div>
        <div>
          <img className="h-14 mt-14"  src='https://static.vecteezy.com/system/resources/previews/020/975/587/non_2x/zomato-logo-zomato-icon-transparent-free-png.png'/>
        </div>
        <div>
          <img className="h-14 mt-14"  src='https://upload.wikimedia.org/wikipedia/commons/c/cd/Meritnation-logo.jpg'/>
        </div>
        <div>
         <img className="xl:h-14 lg:h-8 h-14 mt-14 xl:pl-10 lg:pl-0 pl-10"  src='https://newsmantra.in/wp-content/uploads/2023/11/Group-2242.png'/>
        </div>
      </Slider>
    </div>
  );
}

export default New;