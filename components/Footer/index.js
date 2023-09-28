"use client"
import Image from 'next/image';
// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        fontSize: "14px",
        lineHeight: "30px",
        height: "850px",
        padding: "67px 51px 47px 51px",
        backgroundColor: "#121212",
      }}
    >
      <div>
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
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">OKX hakkında</h2>
            <ul className="list-disc list-inside">
              <li>Hakkımızda</li>
              <li>Kariyer</li>
              <li>Bize Ulaşın</li>
              <li>Hizmet Şartları</li>
              <li>gizlilik Politikaları</li>
              <li>Açıklamalar</li>
              <li>Feragatname</li>
              <li>Hukuki Yaptırım</li>
              <li>OKX Uygulaması</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Ürünler</h2>
            <ul className="list-disc list-inside">
              <li>Kripto satın alın</li>
              <li>P2P alım-satım</li>
              <li>Dönüştürme</li>
              <li>Al-Sat</li>
              <li>Earn</li>
              <li>OKC</li>
              <li>OKX Wallet</li>
              <li>Web3 Marketi</li>
              <li>Kripto hesap makinesi</li>
              <li>Al-Sat Botları</li>
              <li>Tüm kripto paralar</li>
              <li>Akademi</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Hizmetlerimiz</h2>
            <ul className="list-disc list-inside">
              <li>İştirak</li>
              <li>V5 API</li>
              <li>Geçmiş piyasa verileri</li>
              <li>Ücret Tablosu</li>
              <li>Listeleme Başvurusu</li>
              <li>P2P ilanveren başvurusu</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">Destek</h2>
            <ul className="list-disc list-inside">
              <li>Destek Merkezi</li>
              <li>Resmi Hesapları Doğrula</li>
              <li>Duyurular</li>
              <li>OKX Toplulukları</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Kripto satın alın</h2>
            <ul className="list-disc list-inside">
              <li>USDT satın alın</li>
              <li>Bitcoin Satın Al</li>
              <li>Ethereum Satın Al </li>
              <li>ADA Satın Al</li>
              <li>Solana Satın Al</li>
              <li>MATIC Satın Al</li>
              <li>Litecoin al</li>
              <li>XRP Satın Al</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">Kripto hesap makinesi</h2>
            <ul className="list-disc list-inside">
              <li>BTC/TRY</li>
              <li>ETH/TRY</li>
              <li>USDT/TRY</li>
              <li>SOL/TRY</li>
              <li>XRP/TRY</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Al-Sat</h2>
            <ul className="list-disc list-inside">
              <li>BTC text-decoration-line-through</li>
              <li>ETH USDT</li>
              <li>MATIC USDT</li>
              <li>LTC USDT</li>
              <li>SOL USDT</li>
              <li>XRP USDT</li>
              <li>Bitcoin fiyatı</li>
              <li>Web3 Marketi</li>
              <li>Ethereum fiyatı</li>
              <li>Cardano fiyatı</li>
              <li>Solano fiyatı</li>
              <li>XRP fiyatı</li>
            </ul>
          </div>
          <div>
            <div>
              OKX Uygulaması <br /> ile Dilediğiniz Zaman <br /> İşlem
              Yapabilirisniz
            </div>
            <button>Kayıt</button>
            <div>
              <Image
                src="data:image/png;base64,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"
                alt="QR Code"
                width={100}
                height={100}
              />
              <p>OKX uygulaması indirmek için QR kodunu tarayın</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
