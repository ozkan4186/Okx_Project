"use client";
import React, { useState } from "react";

const ToggleText = ({ initialText, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleText = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     
      <div
        className=""
        style={{
          height: "10rem",
          width: "1248px",
          padding: "10px 10px 10px 10px",
        }}
      >
        <div className="flex items-center justify-between ">
          <h1 className="text-3xl font-semibold  ">{title}</h1>{" "}
          {/* Başlık fontu büyük */}
          <button
            className="px-3 py-1 bg-black-500 text-white border-white rounded-lg focus:outline-none"
            onClick={toggleText}
            aria-label={isOpen ? "Close text" : "Open text"}
          >
            {isOpen ? "-" : "+"}
          </button>
        </div>
        <div className={`mt-2 ${isOpen ? "block" : "hidden"}`}>
          <p className="text-white">{initialText}</p>
        </div>
      </div>
    </>
  );
};

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-center text-5xl font-medium mb-10 ">Sorularınız mı var?</h1>
      <ToggleText
        initialText="OKX, gelişmiş finansal tekliflere sahip yenilikçi bir kripto para borsasıdır. 180'den fazla bölgede dünya çapında milyonlarca kullanıcıya son teknoloji kripto alım satımı ve kazanç hizmetleri sunuyoruz.

     OKX ile şunları yapabilirsiniz: 

Spot, marjin ve türev piyasalarında yüzlerce token ve al-sat çifti ile alım satım yapın.
Tüm merkeziyetsiz varlıklarınızı tek bir yerde düzenlemek için Web3 cüzdanınızı bağlayarak DeFi portföyünüzü yönetin.
NFT Marketimizde NFT'ler oluşturun, alıp ve satın.
DeFi ve blok zinciri oyun DApp'leri dahil en iyi merkeziyetsiz uygulamaları keşfedin.
Uygulamamız veya tarayıcı uzantımız aracılığıyla Web3 cüzdanımızla DeFi'ye bağlanın.
Madencilik havuzlarımızda kripto kazanın, kripto teminatlı krediler alın ve OKX Earn ile kriptonuzu çoğaltmanın diğer yollarını keşfedin. "
        title="OKX hangi ürünleri sunuyor?"
      />
      <ToggleText
        initialText="GBP, EUR, USD veya yerel para biriminizle dakikalar içinde kolayca Bitcoin satın alabilirsiniz. OKX; Visa, Mastercard ve ApplePay kredi kartları da dahil olmak üzere çeşitli popüler ödeme yöntemlerini destekler. Başlamak için OKX ile Bitcoin satın alma hakkındaki en son kılavuzumuza göz atın. Kripto ekosisteminde ilgi çeken diğer coin’leri alıp satmak veya elinizde tutmak mı istiyorsunuz? Yolculuğunuza hemen başlamak için aşağıdaki ücretsiz kaynaklara göz atın:

        BTC Satın Al
USDT Satın Al
ETH Satın Al
DOT Satın Al
SOL Satın Al
Doge Satın Al
XRP Satın Al
OKB Satın Al
BCH Satın Al
"
        title="OKX'te nasıl Bitcoin satın alırım?"
      />
      <ToggleText
        initialText="2017 yılında kurulan OKX,yeni nesil finansal ekosistemi inşa etmek için blok zinciri teknolojisini benimseyen Seyşeller'de kayıtlı bir kripto para borsasıdır ve yüzlerce kripto para için çeşitli işlem türleri sunar."
        title="OKX nerede kuruldu?"
      />
      <ToggleText
        initialText="OKX, Amerika Birleşik Devletleri’ndeki müşterilere hizmet veremez. Platformumuz, aşağıdaki bölgeler dışında küresel olarak kullanılabilir: Amerika Birleşik Devletleri, Singapur, Küba, İran, Kuzey Kore, Kırım, Malezya, Suriye, Kanada, Birleşik Krallık (özellikle perakende kullanıcılar için türevlerle ilgili Hizmetler), Bangladeş, Bolivya, Malta ve Hong Kong (özellikle perakende kullanıcılar için türevlerle ilgili Hizmetlerimizle ilgili).
        Tüm ayrıntılar için hizmet şartları sayfamıza göz atabilirsiniz."
        title="ABD vatandaşları OKX'i kullanabilir mi?"
      />
    </div>
  );
};

export default HomePage;
