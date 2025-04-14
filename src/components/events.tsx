export function Events() {
  return (
    <>
      <section className="mb-12 sm:mb-16 py-12 sm:py-16 bg-verde-900 container mx-auto px-3">
        <div className="">
          <p className="mb-4 text-center text-balance font-serif text-verde-200 uppercase tracking-widest text-sm">
            Conecte-se com a natureza
          </p>
          <h2 className="mb-8 text-white text-4xl sm:text-6xl text-center max-w-screen-md mx-auto">
            Cada som cada momento uma nova descoberta
          </h2>

          <div className="grid grid-cols-[repeat(3,minmax(300px,1fr))] overflow-x-auto pb-4 snap-x snap-mandatory gap-4 sm:gap-8">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="grid gap-4 snap-center bg-verde-800 p-6 sm:p-8 rounded-xl "
            >
              <h3 className="text-verde-300 text-2xl font-serif">Lua Nova</h3>

              <div className="text-white">
                <p className="font-serif text-5xl">23</p>
                <p className="text-xl">Março 2049</p>
              </div>

              <p className="text-gray-300 text-balance">
                Melhor período para observação astronômica. O céu estará claro e
                as estrelas visíveis.
              </p>

              <a
                href="#contato"
                className="bg-verde-400 justify-self-start self-end text-verde-900 py-2 px-4 inline-block rounded-full"
              >
                Reservar 23/03
              </a>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="grid gap-4 snap-center bg-verde-800 p-6 sm:p-8 rounded-xl "
            >
              <h3 className="text-verde-300 text-2xl font-serif">
                Chuva de Meteoros
              </h3>

              <div className="text-white">
                <p className="font-serif text-5xl">22</p>
                <p className="text-xl">Julho 2049</p>
              </div>

              <p className="text-gray-300 text-balance">
                Melhor período para observação Chuva de Meteoros. O céu estará
                claro e as estrelas visíveis.
              </p>

              <a
                href="#contato"
                className="bg-verde-400 justify-self-start self-end text-verde-900 py-2 px-4 inline-block rounded-full"
              >
                Reservar 22/07
              </a>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="400"
              className="grid gap-4 snap-center bg-verde-800 p-6 sm:p-8 rounded-xl "
            >
              <h3 className="text-verde-300 text-2xl font-serif">
                Aurora Boreal
              </h3>

              <div className="text-white">
                <p className="font-serif text-5xl">15</p>
                <p className="text-xl">Abril 2049</p>
              </div>

              <p className="text-gray-300 text-balance">
                Melhor período para observação da Aurora Boreal. O céu estará
                iluminado pelas estrelas.
              </p>

              <a
                href="#contato"
                className="bg-verde-400 justify-self-start self-end text-verde-900 py-2 px-4 inline-block rounded-full"
              >
                Reservar 15/04
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
