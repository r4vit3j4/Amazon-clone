import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            src="https://links.papareact.com/gi1"
            // loading="lazy"
            // layout="fill"
            height="500px"
            width="1300px"
            alt=""
          />
        </div>
        <div>
          <Image
            src="https://links.papareact.com/6ff"
            layout="fill"
            // loading="lazy"
            alt=""
          />
        </div>
        <div>
          <Image
            src="https://links.papareact.com/7ma"
            layout="fill"
            // loading="lazy"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
