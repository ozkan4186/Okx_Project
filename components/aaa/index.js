"use client";
import Image from "next/image";
import Link from "next/link";
// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        fontSize: "14px",
        lineHeight: "30px",
        height: "1100px",
        width: "100%",
        padding: "67px 51px 47px 51px",
        backgroundColor: "#121212",
      }}
    >
      <div className="mb-40">
        <div>
          <Image
            src="data:image/png;base64,
iVBORw0KGgoAAAANSUhEUgAAAKQAAABICAQAAADSOpYzAAAABGdBTUEAALGPC/
xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/
4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfmBwMNKhI4Vg/
yAAABMklEQVR42u3aQW6DMBBAUZyT5eSFE/RInS5psOKx8Scq0n9ZNXjA+VE3VpZFkiRJkiShYo0rrYPPWyf3
+3VYXZL138nTuudLxLVfVCmHrcXY+uqjteejPF7/XH5G1teXe+ebt1E/
Q0IMCTEkxJAQQ0IMCTEkxJAQQ0IMCTEkxJCQ+4XcBq+Orj87n54oPlv3iWc2Xk3A55tzZs8rd
+l55OT54PB5ZLrhMjd/2M3keeXufv/a/5QhIYaEGBJiSIghIYaEGBJiSIghIYaEGBJiSEgaMjtG+/B+tw/
f8eVqlPq1X7xYlX5wfTXfPj/095Hv1tdfRPLJ/
X3kvRkSYkiIISGGhBgSYkiIISGGhBgSYkiIISGGhDwuOOH7a+t4p//
qmflticYrf946OS9JkiRJkk75BUgSur6QrNyYAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA3LTAzVDEzOjQy
OjE4KzAwOjAwKpbwNQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNy0wM1QxMzo0MjoxOCswMDowMFvLSIkAA
AAASUVORK5CYII="
            alt="Ortalama Kripto Borsalarından Daha Hızlı, Daha İyi, Daha Güçlü"
            width={100}
            height={80}
          />
        </div>
        <p>©2023 OKX.COM</p>
        <input className="mt-10" type="text" placeholder="Tükçe/USD" />
      </div>

      <div className=" flex w-full m-auto gap-8 leading-9 ">
        <div className="w-48">
          <h2 className="text-2xl font-bold mb-4">OKX hakkında</h2>
          <ul className="text-neutral-700">
            <Link className="hover:text-white " href="#">
              Hakkımızda
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Kariyer
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Bize Ulaşın
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Hizmet Şartları
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              gizLinkk Politikaları
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Açıklamalar
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Feragatname
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Hukuki Yaptırım
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              OKX Uygulaması
            </Link>
          </ul>
        </div>
        <div className="w-52">
          <h2 className="text-2xl font-bold mb-4">Ürünler</h2>
          <ul className="text-neutral-700">
            <Link className="hover:text-white " href="#">
              Kripto satın alın
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              P2P alım-satım
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Dönüştürme
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Al-Sat
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Earn
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              OKC
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              OKX Wallet
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Web3 Marketi
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Kripto hesap makinesi
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Al-Sat Botları
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Tüm kripto paralar
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Akademi
            </Link>
          </ul>
        </div>
        <div className="w-52">
          <h2 className="text-2xl font-bold mb-4">Hizmetlerimiz</h2>
          <ul className="text-neutral-700">
            <Link className="hover:text-white " href="#">
              İştirak
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              {" "}
              V5 API
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Geçmiş piyasa verileri
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Ücret Tablosu
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Linksteleme Başvurusu
            </Link>
            <Link className="hover:text-white " href="#">
              P2P ilanveren başvurusu
            </Link>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Destek</h2>
          <ul className="text-neutral-700">
            <Link className="hover:text-white " href="#">
              Destek Merkezi
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Resmi Hesapları Doğrula
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Duyurular
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              OKX Toplulukları
            </Link>
          </ul>
        </div>
        <div className="w-52">
          <h2 className="text-2xl font-bold mb-4">Kripto satın alın</h2>
          <ul className="text-neutral-700">
            <Link className="hover:text-white " href="#">
              USDT satın alın
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Bitcoin Satın Al
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Ethereum Satın Al{" "}
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              ADA Satın Al
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Solana Satın Al
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              MATIC Satın Al
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Linktecoin al
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              XRP Satın Al
            </Link>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Kripto hesap makinesi</h2>
          <ul className="text-neutral-700">
            <Link className="hover:text-white " href="#">
              BTC/TRY
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              ETH/TRY
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              USDT/TRY
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              SOL/TRY
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              XRP/TRY
            </Link>{" "}
            <br />
          </ul>
        </div>
        <div className="w-52">
          <h2 className="text-2xl font-bold mb-4">Al-Sat</h2>
          <ul className="text-neutral-700  ">
            <Link className="hover:text-white " href="#">
              BTC text-decoration-Linkne-through
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              ETH USDT
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              MATIC USDT
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              LTC USDT
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              SOL USDT
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              XRP USDT
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Bitcoin fiyatı
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Web3 Marketi
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Ethereum fiyatı
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Cardano fiyatı
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              Solano fiyatı
            </Link>{" "}
            <br />
            <Link className="hover:text-white " href="#">
              XRP fiyatı
            </Link>
          </ul>
        </div>





















      </div>
      <div>
        <div>
          <p>Topluluk</p>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
