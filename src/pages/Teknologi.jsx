import { useEffect } from "react";

export default function Teknologi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-24 pb-12 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Teknologi dalam Pengembangan Usaha</h1>
          <p className="text-xl text-blue-100">
            Di era digital, teknologi menjadi kunci keberhasilan dalam mengembangkan usaha
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: "⚡",
              title: "Efisiensi Operasional",
              desc: "Teknologi membantu mengoptimalkan proses bisnis, menghemat waktu, dan mengurangi kesalahan manusia."
            },
            {
              icon: "🌐",
              title: "Jangkauan Lebih Luas",
              desc: "Media sosial dan platform online memungkinkan bisnis menjangkau pasar yang lebih luas, bahkan internasional."
            },
            {
              icon: "📊",
              title: "Keputusan Berbasis Data",
              desc: "Analisis data membantu mengambil keputusan bisnis yang lebih tepat dan terukur."
            },
            {
              icon: "🚀",
              title: "Inovasi Berkelanjutan",
              desc: "Teknologi membuka peluang untuk terus berinovasi dan mengembangkan produk atau layanan."
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Implementation Section */}
        <div className="bg-blue-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Implementasi Teknologi</h2>
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Jika teknologi tidak berperan, rata-rata usaha ataupun bisnis yang dirintis biasanya cenderung menurun, 
              bahkan bisa sampai gulung tikar. Teknologi membantu operasional menjadi lebih efisien, menghemat waktu, 
              dan meminimalkan kesalahan.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Lewat media sosial dan platform online, bisnis bisa menjangkau lebih banyak pelanggan potensial. 
              Layanan pelanggan menjadi lebih cepat dan responsif, sementara keputusan bisnis dapat diambil 
              berdasarkan analisis data yang akurat.
            </p>
          </div>
        </div>

        {/* Tools Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-8">Tools yang Sering Digunakan</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Social Media", icon: "📱" },
              { name: "Analytics", icon: "📊" },
              { name: "Cloud Storage", icon: "☁️" },
              { name: "E-commerce", icon: "🛍️" },
              { name: "CRM", icon: "👥" },
              { name: "Digital Payment", icon: "💳" },
              { name: "Project Management", icon: "📋" },
              { name: "Communication", icon: "💬" }
            ].map((tool, idx) => (
              <div 
                key={idx}
                className="bg-white p-4 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-3xl mb-2 block">{tool.icon}</span>
                <span className="text-sm text-gray-600">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
