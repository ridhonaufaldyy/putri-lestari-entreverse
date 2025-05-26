// src/components/HeroSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=1974&auto=format&fit=crop",
    title: "Teh Kulit Buah Salak",
    desc: "Mengolah limbah kulit salak menjadi minuman sehat inovatif sebagai Chief Financial Officer (CFO).",
    cta: "Lihat Detail",
  },
  {
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1000&auto=format&fit=crop",
    title: "Gantungan Kunci Flanel",
    desc: "Menciptakan aksesori unik dari kain flanel sebagai Chief Operation Officer (COO).",
    cta: "Lihat Detail",
  },
  {
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=1974&auto=format&fit=crop",
    title: "Re-bottle Craft",
    desc: "Transformasi botol plastik bekas menjadi produk bernilai tinggi melalui platform digital.",
    cta: "Lihat Detail",
  },
  {
    image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?q=80&w=1972&auto=format&fit=crop",
    title: "Klik Angkot",
    desc: "Platform inovatif untuk pemesanan dan penyewaan angkot secara online.",
    cta: "Lihat Detail",
  },
  {
    image: "https://images.unsplash.com/photo-1602532305019-3dbbd482dae9?q=80&w=1000&auto=format&fit=crop",
    title: "Pouch Multifungsi",
    desc: "Desain tas inovatif dari kain perca sebagai Chief Design Officer (CDO).",
    cta: "Lihat Detail",
  },
  {
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1950&auto=format&fit=crop",
    title: "Kaos Inovatif",
    desc: "Pakaian transformable dengan konsep unisex dan multi-fungsi.",
    cta: "Lihat Detail",

  }
];

export default function HeroSlider() {
  return (
    <section className="w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        speed={1000}
        pagination={{ 
          clickable: true,
          dynamicBullets: true
        }}
        className="h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-full bg-cover bg-center relative flex flex-col justify-center items-center text-white text-center px-4 cursor-pointer"
              style={{ backgroundImage: `url(${s.image})` }}
              onClick={() => window.location.href = '/bisnis-journey'}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
              <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

                <h1 className="text-4xl md:text-6xl font-bold mb-6 transform transition-all duration-700 translate-y-0 opacity-100 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 leading-normal">
                  {s.title}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto text-blue-50 mb-8 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
