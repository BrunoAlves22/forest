import Image from "next/image";
import Canoagem from "../img/canoagem.jpg";
import VidaSelvagem from "../img/vida-selvagem.jpg";
import ObservacaoNoturna from "../img/observacao-noturna.jpg";
import Manha from "../img/manha.svg";
import MeioDia from "../img/dia.svg";
import Noite from "../img/noite.svg";

export function Experience() {
  return (
    <>
      <section className="container mx-auto px-3 gap-8 mb-12 sm:mb-16 grid sm:grid-cols-2">
        <div className="bg-verde-900 p-6 sm:p-8 rounded-xl">
          <p className="mb-4 text-balance font-serif text-verde-200 uppercase tracking-widest text-sm">
            Experiências únicas
          </p>
          <h2 className="mb-8 text-white text-3xl sm:text-4xl lg:text-5xl">
            Escolha Sua Próxima Aventura
          </h2>

          <h3 className="text-white text-xl flex items-center gap-4 before:h-0.5 before:w-6 before:bg-verde-400 hover:before:w-10 before:transition-all before:duration-300">
            Observação Noturna
          </h3>
          <p className="mb-8 text-balance text-gray-400 pl-10">
            Explore a vida selvagem em seu habitat natural sob as estrelas.
          </p>

          <h3 className="text-white text-xl flex items-center gap-4 before:h-0.5 before:w-6 before:bg-verde-400 hover:before:w-10 before:transition-all before:duration-300">
            Vida Selvagem
          </h3>
          <p className="mb-8 text-balance text-gray-400 pl-10">
            Observe a vida selvagem em seu habitat natural.
          </p>

          <h3 className="text-white text-xl flex items-center gap-4 before:h-0.5 before:w-6 before:bg-verde-400 hover:before:w-10 before:transition-all before:duration-300">
            Canoagem
          </h3>
          <p className="mb-8 text-balance text-gray-400 pl-10">
            Conquiste novos horizontes com nossa equipe especializada.
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="relative cursor-pointer overflow-hidden rounded-xl group"
          >
            <Image
              src={Canoagem}
              alt="Canoagem"
              className="size-full object-cover rounded-xl group-hover:scale-110 transition-all duration-300"
            />

            <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-verde-950/80 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-white">Canoagem</span>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="relative cursor-pointer overflow-hidden rounded-xl group row-span-2"
          >
            <Image
              src={ObservacaoNoturna}
              alt="Observação Noturna"
              className="size-full object-cover rounded-xl group-hover:scale-110 transition-all duration-300"
            />

            <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-verde-950/80 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-white">Observação Noturna</span>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="relative cursor-pointer overflow-hidden rounded-xl group"
          >
            <Image
              src={VidaSelvagem}
              alt="Vida Selvagem"
              className="size-full object-cover rounded-xl group-hover:scale-110 transition-all duration-300"
            />

            <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-verde-950/80 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-white">Vida Selvagem</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-3 mb-12 sm:mb-16 sm:py-16 bg-[url(../img/padrao.svg)] bg-no-repeat bg-contain bg-center">
        <p className="mb-4 text-center text-balance font-serif text-verde-200 uppercase tracking-widest text-sm">
          Ciclo Natural
        </p>
        <h2 className="mb-8 text-white text-4xl sm:text-6xl text-center max-w-screen-md mx-auto">
          Ritmo da Floresta
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <div
            data-aos="fade-right"
            className="grid gap-4 bg-verde-900 p-6 sm:p-8 rounded-xl flex-1 sm:hover:-translate-y-2 transition-all duration-300"
          >
            <div className="bg-verde-400 size-10 flex items-center justify-center rounded-full">
              <Image src={Manha} alt="Manhã" />
            </div>

            <h3 className="font-serif text-2xl text-white">Amanhecer</h3>

            <p className="text-gray-400">
              Desperte com o canto dos pássaros e o som da floresta acordando.
            </p>

            <span className="text-verde-300">05:40 - 07:00</span>
          </div>

          <div
            data-aos="fade-up"
            className="grid gap-4 bg-verde-900 p-6 sm:p-8 rounded-xl flex-1 sm:translate-y-12 sm:hover:translate-y-10 transition-all duration-300"
          >
            <div className="bg-verde-400 size-10 flex items-center justify-center rounded-full">
              <Image src={MeioDia} alt="Meio Dia" />
            </div>

            <h3 className="font-serif text-2xl text-white">Meio Dia</h3>

            <p className="text-gray-400">
              Explore nossas trilhas e descubra a vida selvagem em seu habitat
              natural.
            </p>

            <span className="text-verde-300">12:00 - 14:00</span>
          </div>

          <div
            data-aos="fade-left"
            className="grid gap-4 bg-verde-900 p-6 sm:p-8 rounded-xl flex-1 sm:hover:-translate-y-2 transition-all duration-300"
          >
            <div className="bg-verde-400 size-10 flex items-center justify-center rounded-full">
              <Image src={Noite} alt="Noite" />
            </div>

            <h3 className="font-serif text-2xl text-white">Anoitecer</h3>

            <p className="text-gray-400">
              Observe a vida selvagem em seu habitat natural sob as estrelas.
            </p>

            <span className="text-verde-300">19:00 - 21:00</span>
          </div>
        </div>
      </section>
    </>
  );
}
