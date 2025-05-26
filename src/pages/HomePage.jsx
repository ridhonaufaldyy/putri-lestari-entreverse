import { Link } from 'react-router-dom';
import profileImage from '../assets/profile-putri.jpeg';

export default function HomePage() {
  return (
    <>      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Perjalanan Kuliah</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Pengalaman dan pencapaian selama menempuh pendidikan di Universitas.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: "2021",
                title: "Semester 1-2",
                desc: "Memulai perjalanan akademik dengan mengenal dasar-dasar pemrograman dan algoritma."
              },
              {
                year: "2022",
                title: "Semester 3-4",
                desc: "Mengembangkan kemampuan dalam pengembangan web dan mobile application."
              },
              {
                year: "2023",
                title: "Semester 5-6",
                desc: "Fokus pada spesialisasi dalam teknologi informasi dan project management."
              }
            ].map((milestone, idx) => (
              <div key={idx} className="relative bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-12 -mt-12 transition-all duration-300 group-hover:bg-blue-100"></div>
                <span className="relative z-10 inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">{milestone.year}</span>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/perjalanan-kuliah" 
              className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Lihat Selengkapnya
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </Link>
          </div>
        </div>
      </section><section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative group">
                <img 
                  src={profileImage}
                  alt="Putri Lestari"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto transform transition-all duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 px-6 py-2 rounded-full font-bold transform rotate-3 group-hover:rotate-0 transition-all duration-300">
                  Entrepreneur
                </div>
              </div>
            </div>
            <div className="text-white order-1 md:order-2">
              <span className="inline-block bg-blue-600/30 backdrop-blur-sm text-blue-100 px-4 py-1 rounded-full text-sm mb-4">
                Tentang Saya
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Putri Lestari</h2>
              <div className="space-y-4 text-blue-50">
                <p className="leading-relaxed">
                  Seorang mahasiswa dan pengusaha muda yang bersemangat dalam mengembangkan berbagai ide inovatif menjadi bisnis yang berkelanjutan. Dengan pengalaman di berbagai proyek kreatif, saya terus berupaya menciptakan solusi yang bermanfaat bagi masyarakat.
                </p>
                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <h3 className="text-xl font-semibold mb-2">6+</h3>
                    <p className="text-blue-200 text-sm">Proyek Bisnis</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <h3 className="text-xl font-semibold mb-2">3+</h3>
                    <p className="text-blue-200 text-sm">Tahun Pengalaman</p>
                  </div>
                </div>
                <div className="pt-6">
                  <Link
                    to="/profil"
                    className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    Lihat Profil Lengkap
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Teknologi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Eksplorasi teknologi dan tools yang saya gunakan dalam pengembangan berbagai proyek.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💳",
                title: "Digital Payment",
                tools: ["GoPay", "OVO", "DANA"],
                desc: "Mempermudah Transaksi Keuangan dengan Menggunakan Platform Pembayaran Digital Populer."
              },
              {
                icon:"🛍️",
                title: "Ecommerce",
                tools: ["Shopee", "Lazada", "TokoPedia"],
                desc: "Menyokong Berbagai Keperluan Belanja Online dengan Memanfaatkan Platform Ecommerce Populer."
              },
              {
                icon:"📱",
                title: "Social Media",
                tools: ["Instagram", "WhatsApp", "TikTok"],
                desc: "Mencari Ide dan juga Sumber Inspirasi untuk berbagai proyek bisnis melalui platform media sosial."
              }
            ].map((tech, idx) => (              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="bg-blue-50 w-24 h-24 rounded-2xl flex items-center justify-center mb-8">
                  <span className="text-4xl">{tech.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.tools.map((tool, toolIdx) => (
                    <span key={toolIdx} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{tech.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/teknologi" 
              className="inline-flex items-center group"
            >
              <span className="flex flex-row items-center bg-blue-700 text-white px-6 py-3 rounded-full font-semibold group-hover:bg-blue-600 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                Selengkapnya
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
