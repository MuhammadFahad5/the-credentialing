"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import Image from "next/image";

const items = [
  {
    key: "1",
    title: "Our Partner",
    image: "/home/patner_home_1.png",
  },
  {
    key: "2",
    title: "Our Partner",
    image: "/home/patner_home_2.png",
  },
  {
    key: "3",
    title: "Our Partner",
    image: "/home/patner_home_3.png",
  },
  {
    key: "4",
    title: "Our Partner",
    image: "/home/patner_home_1.png",
  },
  {
    key: "5",
    title: "Our Partner",
    image: "/home/patner_home_2.png",
  },
  {
    key: "6",
    title: "Our Partner",
    image: "/home/patner_home_3.png",
  },
];

export default function Slide() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(
        window.innerWidth < 560
          ? 3
          : window.innerWidth < 768
          ? 4
          : window.innerWidth < 1024
          ? 5
          : 7
      );
    };

    // Set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-8">
      <div>
        <Carousel autoplay slidesToShow={slidesToShow} dots={null}>
          {items.map((item) => (
            <div key={item.key}>
              <Image
                src={item.image}
                width={130}
                height={22}
                alt={item.title}
                className="w-full max-w-[130px]"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
