import React from "react";
import { Carousel } from "antd";
import second from "../../../public/assets/CoverPhoto/images2.jpg";
import second1 from "../../../public/assets/CoverPhoto/images1.jpg";
import second2 from "../../../public/assets/CoverPhoto/images2.jpg";
import second3 from "../../../public/assets/CoverPhoto/images3.jpg";
import second4 from "../../../public/assets/CoverPhoto/images5.jpg";
import Image from "next/image";
const contentStyle = {
  height: "360px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Banner = () => {
  return (
    <div>
      {/* <h1>Banner Images</h1> */}
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <Image className="w-full object-cover" src={second}></Image>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image className="w-full object-cover" src={second1}></Image>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image className="w-full object-cover" src={second2}></Image>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image className="w-full object-cover" src={second3}></Image>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image className="w-full object-cover" src={second4}></Image>
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
