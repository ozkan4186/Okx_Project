import React from 'react'
import VideoPlayer from '../VideoPlayer'
import Image from 'next/image';

const Main = () => {
  return (
    <>
      <div className=" h-auto w-full px-3 pt-0 pb-48 leading-4  ">
        <div className="h-28">
          <h1
            className="text-5xl leading-normal font-medium  h-16 w-full block text-center 
tracking-normal font-harmony"
          >
            Profesyonel İşlemler Yapın
          </h1>
          <h3 className="text-xl text-center leading-8 block h-8 my-5 w-full ">
            En düşük İşlem Ücretleri,En Hızlı İşlemler,Güçlü API Desteği ve Daha
            Fazlası
          </h3>
        </div>

        <VideoPlayer />
      </div>
      <div>
     
     
     
     
     
     
       
       
       
      </div>
    </>
  );
}

export default Main