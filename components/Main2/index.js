"use client";
import Image from "next/image";
import { useState } from "react";

function MyComponent() {
  const [selectedButton, setSelectedButton] = useState("button1");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className="flex">
      <div>
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
      <div>
        <h2>
          Tek Platform, Sınırsız <br /> Özellik
        </h2>
        <div>
          <button onClick={() => handleButtonClick("button1")}>Lite</button>
          <button onClick={() => handleButtonClick("button2")}>Web3</button>
          <button onClick={() => handleButtonClick("button3")}>Pro</button>
        </div>
        {selectedButton === "button1" && <p>Metin 1</p>}
        {selectedButton === "button2" && <p>Metin 2</p>}
        {selectedButton === "button3" && <p>Metin 3</p>}
      </div>
    </div>
  );
}

export default MyComponent;
