"use client";
import Image from "next/image";
import { useState } from "react";
import HomePage from "../Accordion";

function MyComponent() {
  const [selectedButton, setSelectedButton] = useState("button1");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <>
      <div
        style={{
          height: "853px",
          width: "1248px",
          fontSize: "14px",
          lineHeight: "14px",
          display: "block",
          padding: "120px 12px 120px 12px",
          margin: "auto",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            lineHeight: "14px",
            width: "1224px",
            height: "614px",
            display: "flex",
          }}
        >
          <div
            className=""
            style={{
              height: "611px",
              fontSize: "14px",
              lineHeight: "14px",
              display: "inline",
              width: "282px",
            }}
          >
            {selectedButton === "button1" && (
              <Image
                src="https://static.okx.com/cdn/assets/imgs/236/53565E10320B7359.png"
                alt="Tek Platform, Sınırsız ÖzellikLite"
                width={500}
                height={1084}
              />
            )}
            {selectedButton === "button2" && (
              <Image
                src="https://static.okx.com/cdn/assets/imgs/237/296C30E044644A8A.png"
                alt="Tek Platform, Sınırsız ÖzellikWeb3"
                width={500}
                height={1084}
              />
            )}
            {selectedButton === "button3" && (
              <Image
                src="https://static.okx.com/cdn/assets/imgs/236/B300B5CD7BBEE474.png"
                alt="Tek Platform, Sınırsız ÖzellikPro"
                width={500}
                height={1084}
              />
            )}
          </div>
          <div
            style={{
              display: "block",
              fontSize: "14px",
              lineHeight: "14px",
              height: "467px",
              width: "510px",
              margin: "146px 0 0 102px",
              padding: "0 12px 0 12px",
              minHeight: "auto",
              minWidth: "auto",
            }}
          >
            <h2 className="text-2xl font-medium leading-10 h-32 w-96 ">
              Tek Platform, Sınırsız <br /> Özellik
            </h2>
            <div>
              <button onClick={() => handleButtonClick("button1")}>Lite</button>
              <button onClick={() => handleButtonClick("button2")}>Web3</button>
              <button onClick={() => handleButtonClick("button3")}>Pro</button>
            </div>
            {selectedButton === "button1" && (
              <p>
                Kriptoda yeni misiniz?Hiç sorun değil.Tek dokunuşla <br /> 5 USD
                değerinde bile kripto satın alabilir ve ilerledikçe
                becerilerinizi geliştirebilirsiniz
              </p>
            )}
            {selectedButton === "button2" && (
              <p>
                Tüm favori zincirlerinizi destekleyen dünyanın en iyi <br /> NFT
                piyasası,DEX'i ve cüzdanını keşfedin
              </p>
            )}
            {selectedButton === "button3" && (
              <p>
                Marjinli ve vadeli işlemler,güçlü API'ler ve al-sat <br />{" "}
                botları ile hareket halindeyken bir profesyonel gibi <br /> alım
                satım yapabilirsiniz.{" "}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* !!! Main 3 Kısmı  */}
      <div>
        <h2>Yolculuğunuzun Her Aşamasında Sizinle</h2>
        <p>
          İlk kripto al-sat deneyiminizden ilk NFT işleminize kadar,tüm süreç
          boyunca size rehberlik edeceğiz
        </p>
        <div>
          <div className="video-player">
            <video
              className="third-pc-animation"
              autoPlay
              loop
              playsInline
              width={936}
              height={253}
              muted
              style={{ visibility: "visible" }}
              poster="https://static.okx.com/cdn/assets/imgs/2210/2763D233C494439D.jpg?x-oss-process=image/format,webp"
            >
              <source
                src="https://static.okx.com/cdn/assets/files/2210/D47D930F643E7A00.webm"
                type="video/webm"
              />
              {/* İzleyici tarayıcı videoyu desteklemezse alternatif içerik */}
              Tarayıcınız videoyu desteklemiyor.
            </video>
          </div>
        </div>
      </div>
      <br /> <br /> <br />
      {/* Main 4 Kısmı  */}
      <div className="flex  justify-between items-center mx-8 ">
        <div>
          <h2>OKX nedir?</h2>
          <p>
            Birinci sınıf iş ortaklarımızın yardımıyla neden yeni favori kripto{" "}
            <br />
            uygulamamızın biz olduğumuzu öğrenin{" "}
          </p>
          <button>Keşfet</button>
        </div>
        <div className="logo-img">
          <Image
            src="https://static.okx.com/cdn/assets/imgs/2210/DBDC29AD98D75479.png"
            alt="OKX nedir? Birinci sınıf iş ortaklarımızın yardımıyla neden yeni favori kripto uygulamanızın biz olduğumuzu öğrenin."
            width={374}
            height={112}
          />
        </div>
      </div>
      {/* Video Kısmı */}
      <div className="flex gap-10 justify-center ">
        <div className="relative video-content h-96 w-80 ">
          <video
            controls
            playsInline
            src="https://static.okx.com/cdn/assets/files/2210/B961D658AE174818.mp4"
            poster="https://static.okx.com/cdn/assets/imgs/2211/30151288EAF5AEE6.jpg?x-oss-process=image/format,webp"
          >
            {/* İzleyici tarayıcınız videoyu desteklemiyor ise alternatif içerik */}
            Tarayıcınız videoyu desteklemiyor.
          </video>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <div className="text-center">
              <h2 className="text-2xl font-bold">
                Teknik direktör Pep Guardiola
              </h2>
              <p>Çılgın futbol formasyonunu açıklıyor</p>
            </div>
          </div>
        </div>
        <div className="relative video-content h-96 w-80 ">
          <video
            controls
            playsInline
            src="https://static.okx.com/cdn/assets/files/2210/D583B0A2F58732CD.mp4"
            poster="https://static.okx.com/cdn/assets/imgs/2211/8D4C3E2605F69059.jpg?x-oss-process=image/format,webp"
          >
            {/* İzleyici tarayıcınız videoyu desteklemiyor ise alternatif içerik */}
            Tarayıcınız videoyu desteklemiyor.
          </video>

          <div
            className="absolute inset-0 flex items-center justify-center bg-black 
bg-opacity-50 text-white"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold">
                Teknik direktör Pep Guardiola
              </h2>
              <p>Çılgın futbol formasyonunu açıklıyor</p>
            </div>
          </div>
        </div>
        <div className="relative video-content h-96 w-80 ">
          <video
            controls
            playsInline
            src="https://static.okx.com/cdn/assets/files/2210/CCAA7B610D3D33D4.mp4"
            poster="https://static.okx.com/cdn/assets/imgs/2211/EF1304B5D4D9DB3E.jpg?x-oss-process=image/format,webp"
          >
            {/* İzleyici tarayıcınız videoyu desteklemiyor ise alternatif içerik */}
            Tarayıcınız videoyu desteklemiyor.
          </video>

          <div
            className="absolute inset-0 flex items-center justify-center bg-black 
bg-opacity-50 text-white"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold">
                Teknik direktör Pep Guardiola
              </h2>
              <p>Çılgın futbol formasyonunu açıklıyor</p>
            </div>
          </div>
        </div>
      </div>
      <HomePage/>
    </>
  );
}

export default MyComponent;
