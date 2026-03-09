import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ClientSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="flex items-center ml-[5rem]" >
      <div className="w-[5rem] h-[5rem]">
        <img src="/assets/Clients/AASTU.jpg" alt=" pAASTU"  className="w-[5rem] h-[5rem]"/>
      </div>
      <div className="w-[5rem] h-[5rem]">
        <img src="/assets/Clients/AAU_logo.png" alt=" AAU"  className="w-[5rem] h-[5rem]"/>
      </div>
      <div className="w-[5rem] h-[5rem]">
        <img src="/assets/Clients/Abay.jpg" alt=" ABAY"  className="w-[5rem] h-[5rem]"/>
      </div>
      <div className="w-[5rem] h-[5rem]">
        <img src="/assets/Clients/awash-bank.png" alt=" awash"  className="w-[5rem] h-[5rem]"/>
      </div>

      <div className="w-[5rem] h-[5rem]" >
        <img src="/assets/Clients/JU_logo.jpg" alt="jimma" className="w-[5rem] h-[5rem]" />
      </div>
      <div className="w-[5rem] h-[5rem]">
        <img src="/assets/Clients/MT_logo.png" alt=" mizan tepi" className="w-[5rem] h-[5rem]"/>
      </div>
      <div className="w-[5rem] h-[5rem]" >
        <img src="/assets/Clients/cbe-logo.png" alt="commercial bank of ethiopia" className="w-[5rem] h-[5rem]" />
      </div>
      <div className="w-[5rem] h-[5rem]">
        <img src="/assets/Clients/DB.png" alt="dashen" className="w-[5rem] h-[5rem]"/>
      </div>

      <div className="w-[5rem] h-[5rem]">
        <img src="/assets/Clients/MU_logo.png" alt="mekelle" className="w-[5rem] h-[5rem]" />
      </div>
      <div className="w-[5rem] h-[5rem]">
        <img src="/assets/Clients/wachamo.jpg" alt=" wachamo" className="w-[5rem] h-[5rem]" />
      </div>
      <div className="w-[5rem] h-[5rem]">
        <img src="/assets/Clients/ELB.png" alt=" ethiopian national bank" className="w-[5rem] h-[5rem]" />
      </div>
      <div className="w-[5rem] h-[5rem]">
        <img src="/assets/Clients/zemen.png" alt=" zemmen" className="w-[5rem] h-[5rem]" />
      </div>

      <div className="w-[5rem] h-[5rem]">
        <img src="/assets/Clients/wello_logo.jpg" alt=" wello" className="w-[5rem] h-[5rem]" />
      </div>
    </Slider>
  );
}

export default ClientSlider;