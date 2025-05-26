import { useState } from "react";

export default function BisnisJourney() {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      id: 1,
      title: "Teh Kulit Buah Salak",
      role: "Chief Financial Officer (CFO)",
      shortDesc: "Mengolah limbah kulit salak menjadi minuman sehat inovatif",
      fullDesc: "Merupakan bisnis pertama yang saya jalani saat masa orientasi. Dalam proyek ini, saya berperan sebagai Chief Financial Officer (CFO) bersama rekan saya Wilda, dengan tanggung jawab mengelola data keuangan, mencatat transaksi pembelian bahan, serta membuat laporan keuangan.",
      driveLink: "https://drive.google.com/drive/folders/1LDrezKJr21fKL6nSbL3gpLvfPneXuub5",
      image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=1974&auto=format&fit=crop",
      tag: "Food & Beverage",
      year: "2023",
      duties: [
        "Mengelola data keuangan proyek",
        "Mencatat transaksi pembelian bahan",
        "Membuat laporan keuangan",
        "Menganalisis kelayakan finansial"
      ]
    },
    {
      id: 2,
      title: "Gantungan Kunci Flanel (Key Craft)",
      role: "Chief Operation Officer (COO)",
      shortDesc: "Kreasi gantungan kunci dari bahan kain flanel yang unik",
      fullDesc: "Proyek ini dilaksanakan pada semester pertama untuk memenuhi tugas dari Ibu Mira Nurfitriya, S.Pd., M.Sc. Peran saya adalah sebagai Chief Operation Officer (COO), bertugas mencari bahan baku serta memproduksi barang tersebut.",      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1000&auto=format&fit=crop",
      tag: "Handcraft",
      year: "2023",
      driveLink: "https://drive.google.com/drive/folders/1LKxAHZHNjNrNhGJwdjFMngKqHWfjVN4-",
      duties: [
        "Pencarian dan pengadaan bahan baku",
        "Mengelola proses produksi",
        "Kontrol kualitas produk",
        "Optimalisasi proses manufaktur"
      ]
    },
    {
      id: 3,
      title: "Re-bottle Craft",
      role: "Creative Team",
      shortDesc: "Mengubah sampah botol plastik menjadi produk bernilai tinggi",
      fullDesc: "Proyek ini merupakan tugas dari mata kuliah yang diasuh oleh Bapak Ismail Yusup, ST., MBA., MOS., CIPE., CDTE. Kami menciptakan ide bisnis berbasis digital yang mengolah sampah botol plastik menjadi produk bernilai. Saya dan tim belajar membuat mockup produk dan melakukan pitching ide bisnis dengan baik.",      image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=1974&auto=format&fit=crop",
      tag: "Digital Business",
      year: "2023",
      driveLink: "https://drive.google.com/drive/folders/1LUwX_XWccox2zpmB9ML_OMFHdF1AoArv",
      duties: [
        "Pembuatan mockup produk",
        "Persiapan dan pelaksanaan pitching",
        "Pengembangan konsep digital",
        "Riset pasar dan kompetitor"
      ]
    },
    {
      id: 4,
      title: "Klik Angkot",
      role: "Product Manager",
      shortDesc: "Platform pemesanan dan penyewaan angkot online",
      fullDesc: "Kami mengembangkan platform 'Klik Angkot' untuk memudahkan pemesanan dan penyewaan angkot secara online. Proyek ini menggabungkan teknologi dengan transportasi tradisional untuk memberikan solusi modern bagi masyarakat.",      image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?q=80&w=1972&auto=format&fit=crop",
      tag: "Platform Digital",
      year: "2024",
      driveLink: "https://drive.google.com/drive/folders/1LO2wdrrg4aptZS0F29rRsX-ryfgCEqAA",
      duties: [
        "Pengembangan konsep platform",
        "Analisis kebutuhan pengguna",
        "Perencanaan fitur aplikasi",
        "Koordinasi dengan tim teknis"
      ]
    },
    {
      id: 5,
      title: "Pouch Multifungsi (Upcycling)",
      role: "Chief Design Officer (CDO)",
      shortDesc: "Tas multifungsi dari kain perca yang berkelanjutan",
      fullDesc: "Pada proyek ini, saya menjabat sebagai Chief Design Officer (CDO) atau Chief Creative Officer (CCO). Saya merancang desain tas serta menambahkan elemen fungsional. Proyek ini merupakan bagian dari tugas mata kuliah Mentoring yang diampu oleh Bapak Dr. Nandang, S.A.P., M.A.P.",      image: "https://images.unsplash.com/photo-1602532305019-3dbbd482dae9?q=80&w=1000&auto=format&fit=crop",
      tag: "Fashion",
      year: "2024",
      driveLink: "https://drive.google.com/drive/folders/1LEFCbtNjsS61tY3oVAoC_Qi7n2uy3toV",
      duties: [
        "Perancangan desain produk",
        "Pengembangan fitur fungsional",
        "Seleksi material berkelanjutan",
        "Supervisi proses produksi"
      ]
    },
    {
      id: 6,
      title: "Kaos Inovatif",
      role: "Production Assistant",
      shortDesc: "Pakaian transformable dengan desain multifungsi",
      fullDesc: "Mengembangkan produk pakaian inovatif seperti kaos unisex yang dapat diubah menjadi setelan baju dan rok, serta vest yang bisa menjadi tote bag. Saya membantu proses produksi dan penyediaan bahan.",      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1950&auto=format&fit=crop",
      tag: "Fashion",
      year: "2024",
      driveLink: "https://drive.google.com/drive/folders/1LOQeF1BGmsbKVXq68opodfSKSkwL-oXO",
      duties: [
        "Pengadaan bahan produksi",
        "Koordinasi dengan penjahit",
        "Kontrol kualitas produk",
        "Pengembangan prototype"
      ]
    }
  ];

  return (
    <section className="pt-24 pb-12 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Business Journey</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Perjalanan mengembangkan berbagai proyek bisnis selama masa perkuliahan
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm">
                    {project.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-blue-200 mb-2">{project.role}</p>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.shortDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-blue-700">{selectedProject.title}</h2>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {selectedProject.year}
                </span>
              </div>
              <p className="text-lg text-blue-600 mb-4">{selectedProject.role}</p>
              <p className="text-gray-600 mb-6">{selectedProject.fullDesc}</p>
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-700 mb-4">Tanggung Jawab:</h3>
                <ul className="list-disc list-inside space-y-2">
                  {selectedProject.duties.map((duty, idx) => (
                    <li key={idx} className="text-gray-600">{duty}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-center">
                <a
                  href={selectedProject.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                  Lihat Detail Project di Drive
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}