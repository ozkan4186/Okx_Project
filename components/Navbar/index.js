"use client"
import React from "react";
import VideoComponent from "../Video";
import MyButton from "../Button";
import Image from "next/image";


const Navbar = () => {
  return (
    <div className="flex  p-44 justify-around   my-2  mx-2 h-full ">
      <div>
        <div className=" flex-col ">
          <div
            style={{
              fontSize: "70px",
              fontWeight: "700",
              lineHeight: "80px",
              textDecoration: "none solid rgb(255,255,255)",
              height: "300px",
              width: "545px",
            }}
          >
            Ortalama Kripto <br /> Borsalarından Daha Hızlı,Daha İyi,Daha Güçlü
          </div>
          <div className="flex  items-center  flex-wrap justify-between  gap-20 mt-40">
            <div className="border-white">
              <input
                className=" bg-black "
                type="text"
                placeholder="E-posta/Telefon"
              />
            </div>
            <div>
              <MyButton />
            </div>
          </div>
          <div className="flex  items-center flex-wrap justify-between gap-30 mt-40">
            <div>
              <Image
                src="https://static.okx.com/cdn/assets/imgs/236/DD7AC9432E675714.png"
                alt="Ortalama Kripto Borsalarından Daha Hızlı, Daha İyi, Daha Güçlü"
                width={165}
                height={120}
              />
            </div>
            <div>
              <Image
                src="https://static.okx.com/cdn/assets/imgs/2210/499A92F3657A52EC.png"
                alt="Ortalama Kripto Borsalarından Daha Hızlı, Daha İyi, Daha Güçlü"
                width={160}
                height={120}
              />
            </div>
            <div>
              <Image
                src="https://static.okx.com/cdn/assets/imgs/2210/6279B178FADAFCC5.png"
                alt="Ortalama Kripto Borsalarından Daha Hızlı, Daha İyi, Daha Güçlü"
                width={90}
                height={66}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <VideoComponent />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
