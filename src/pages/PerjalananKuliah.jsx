import { useEffect } from "react";

export default function PerjalananKuliah() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Perjalanan Kuliah</h1>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-8"></div>
        </div>

        <div className="space-y-12">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-0 w-1 bg-blue-200 h-full transform -translate-x-1/2 ml-4 md:ml-0"></div>
            
            <div className="space-y-12">
              {/* Entry 1 */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:flex items-center md:space-x-8">
                  <div className="hidden md:block w-1/3 text-right">
                    <div className="font-semibold text-blue-700">Awal Mula</div>
                  </div>
                  <div className="absolute left-0 w-8 h-8 bg-blue-700 rounded-full transform -translate-x-1/2 mt-3 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="md:hidden font-semibold text-blue-700 mb-2">Awal Mula</div>
                    <p className="text-gray-600 leading-relaxed">
                      Prodi Kewirausahaan UPI pada awalnya bukanlah pilihan pertamaku. Sejak berada di bangku SMA aku sudah menentukan pilihanku. 
                      Akan tetapi keluargaku kurang menyetujui apa yang menjadi pilihanku. Dan mereka menyarankanku untuk berkuliah di Tasikmalaya saja.
                    </p>
                  </div>
                </div>
              </div>

              {/* Entry 2 */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:flex items-center md:space-x-8">
                  <div className="hidden md:block w-1/3 text-right">
                    <div className="font-semibold text-blue-700">Menemukan Passion</div>
                  </div>
                  <div className="absolute left-0 w-8 h-8 bg-blue-700 rounded-full transform -translate-x-1/2 mt-3 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="md:hidden font-semibold text-blue-700 mb-2">Menemukan Passion</div>
                    <p className="text-gray-600 leading-relaxed">
                      Dari situ aku mulai mencari Universitas dan Prodi yang sesuai dengan passionku. 
                      Karena sebelumnya sudah pernah melakukan test psikotes dan minat karir, aku menjadi punya gambaran mau memilih kemana. 
                      Hasil minat karirku menunjukkan ke arah bisnis kreatif, dan disitulah aku memilih Program Studi Kewirausahaan UPI.
                    </p>
                  </div>
                </div>
              </div>

              {/* Entry 3 */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:flex items-center md:space-x-8">
                  <div className="hidden md:block w-1/3 text-right">
                    <div className="font-semibold text-blue-700">Entreverse</div>
                  </div>
                  <div className="absolute left-0 w-8 h-8 bg-blue-700 rounded-full transform -translate-x-1/2 mt-3 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="md:hidden font-semibold text-blue-700 mb-2">Entreverse</div>
                    <p className="text-gray-600 leading-relaxed">
                      Berada di keluarga Entreverse merupakan hal yang aku syukuri. 
                      Karena disini aku memiliki teman-teman baru yang baik dan disini juga membuatku memiliki banyak sekali pengalaman baru 
                      mengenai soft skill maupun hard skill.
                    </p>
                  </div>
                </div>
              </div>

              {/* Entry 4 */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:flex items-center md:space-x-8">
                  <div className="hidden md:block w-1/3 text-right">
                    <div className="font-semibold text-blue-700">Pembelajaran Baru</div>
                  </div>
                  <div className="absolute left-0 w-8 h-8 bg-blue-700 rounded-full transform -translate-x-1/2 mt-3 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="md:hidden font-semibold text-blue-700 mb-2">Pembelajaran Baru</div>
                    <p className="text-gray-600 leading-relaxed">
                      Yang awalnya kukira Berwirausaha itu hanya menjual produk saja, ternyata jika kita gali lebih dalam lagi, 
                      banyak sekali ilmu yang tidak aku tahu. Disini aku diajarkan untuk menghitung HPP dengan benar 
                      dan banyak hal lain mengenai kewirausahaan yang baru aku tahu semenjak aku berkuliah disini.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-blue-700 text-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Ingin Tahu Lebih Lanjut?</h2>
              <p className="mb-6">
                Ikuti perjalanan bisnisnya juga di Business Journey
              </p>
              <a 
                href="/bisnis-journey" 
                className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transform transition-all duration-300 hover:-translate-y-1"
              >
                Lihat Business Journey →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
