import Navbar from "../components/Navbar";
import { useEffect } from "react";

export default function ProfilPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-5xl font-bold text-blue-700 mb-6">Putri Lestari</h1>
                <div className="bg-blue-600/10 backdrop-blur-sm p-6 rounded-2xl mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Seorang mahasiswa <span className="text-blue-700 font-semibold">Program Studi Kewirausahaan</span> yang 
                    bersemangat dalam mengembangkan ide-ide inovatif menjadi bisnis yang berkelanjutan dan bermanfaat 
                    bagi masyarakat.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
                    <div className="text-3xl font-bold text-blue-700 mb-1">6+</div>
                    <div className="text-gray-600">Proyek Bisnis</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
                    <div className="text-3xl font-bold text-blue-700 mb-1">3+</div>
                    <div className="text-gray-600">Tahun Pengalaman</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1747375615029-515941ee7a99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Putri Lestari"
                    className="w-full rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 px-6 py-2 rounded-full font-bold transform rotate-3 hover:rotate-0 transition-all duration-300">
                    Entrepreneur
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pendidikan</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Universitas Pendidikan Indonesia</li>
                  <li>Program Studi Kewirausahaan</li>
                  <li>Angkatan 2023</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pencapaian</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Member of Entreverse</li>
                  <li>Student Entrepreneur</li>
                  <li>Creative Business Developer</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lokasi</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Tasikmalaya</li>
                  <li>Jawa Barat</li>
                  <li>Indonesia</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Tentang Saya</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Nama saya <strong className="text-blue-700">Putri Lestari</strong>, berasal dari Kota Tasikmalaya. 
                Saya adalah anak pertama dari tiga bersaudara yang memiliki passion dalam dunia wirausaha.
              </p>
              <p>
                Saya menyelesaikan pendidikan menengah di SMAN 1 Tasikmalaya dan saat ini sedang menempuh 
                studi jenjang Sarjana (S1) pada Program Studi Kewirausahaan di Universitas Pendidikan Indonesia.
              </p>
              <p>
                Sebagai bagian dari komunitas <strong className="text-blue-700">Entreverse</strong>, saya terus 
                mengembangkan potensi dan kemampuan dalam menciptakan solusi bisnis yang inovatif dan berkelanjutan. 
                Fokus saya adalah pada pengembangan bisnis yang tidak hanya menguntungkan secara finansial, 
                tetapi juga memberikan dampak positif bagi masyarakat dan lingkungan.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
