import React from "react";

const Map = ({width,height}) => {
  return (
    <div className="overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2068.7147550201785!2d38.76001127783876!3d9.039821674576109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f6db0f5c617%3A0x9fb55f7f6df3860b!2zUmFkaWNhbCBTY2hvb2wgfCA1IEtpbG8gfCDhiKvhi7LhiqvhiI0g4Ym1IC8g4Ymk4Ym1IHwgNSDhiqrhiI4!5e0!3m2!1sam!2set!4v1698873532985!5m2!1sam!2set"
        width={width}
        height={height}
        style={{border:"0"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default Map;
