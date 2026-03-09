import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BrandSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="/assets/Brands/cisco.png" alt=" partner1"  className="w-[10rem] h-[10rem]"/>
      </div>
      <div>
        <img src="/assets/Brands/apc.png" alt=" partner2"  className="w-[10rem] h-[10rem]"/>
      </div>
      <div className="w-[10rem] h-[10rem]">
        <img src="/assets/Brands/huawei.jpg" alt=" partner4" className="w-[8rem] h-[8rem]" />
      </div>
      <div>
        <img src="/assets/Brands/kaspersky.jpg" alt=" partner3" className="w-[10rem] h-[10rem]"/>
      </div>
      <div>
        <img src="/assets/Brands/apc.png" alt=" partner5" className="w-[10rem] h-[10rem]" />
      </div>
      <div>
        <img src="/assets/Brands/huawei2.jpg" alt=" partner6" className="w-[8rem] h-[8rem]" />
      </div>
    </Slider>
  );
}

export default BrandSlider;