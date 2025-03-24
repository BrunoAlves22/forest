"use client";

import Image from "next/image";
import Logo from "../img/forest.svg";
// import Floresta from "../img/floresta.jpg";
import Wildbeast from "../img/parceiros/wildbeast.svg";
import Casa1 from "../img/casa1.jpg";
import Casa2 from "../img/casa2.jpg";
import Casa3 from "../img/casa3.jpg";
import Canoagem from "../img/canoagem.jpg";
import VidaSelvagem from "../img/vida-selvagem.jpg";
import ObservacaoNoturna from "../img/observacao-noturna.jpg";
import Manha from "../img/manha.svg";
import MeioDia from "../img/dia.svg";
import Noite from "../img/noite.svg";
import Caravan from "../img/parceiros/caravan.svg";
import Dogs from "../img/parceiros/dogs.svg";
import Lescone from "../img/parceiros/lescone.svg";
import Surfbot from "../img/parceiros/surfbot.svg";

import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState<boolean>(false);

  function toggleMenu() {
    setMenu(!menu);
  }

  return (
    <>
      <div className="container px-3 mt-4 flex justify-center md:justify-start mx-auto">
        <div className="inline-flex items-center rounded-md bg-verde-900">
          <div className="relative">
            <span className="absolute inline-flex -left-1 h-full w-full animate-ping rounded-full bg-verde-200 opacity-75"></span>
            <span className="size-2 bg-verde-300 rounded-full block relative -left-1"></span>
          </div>
          <div className="flex text-verde-300 divide-x-2 divide-verde-800 *:px-4 *:py-2">
            <div className="capitalize">Segunda</div>
            <div>25°</div>
            <div>⛅</div>
          </div>
        </div>
      </div>

      <header className="container px-3 flex justify-between items-center py-8 gap-8 mx-auto">
        <a href="#">
          <Image src={Logo} alt="Logo" width={120} height={120} />
        </a>
        <nav
          onClick={() => setMenu(false)}
          className={`lg:block ${!menu && "hidden"} ${
            menu && "flex"
          } items-center z-40 max-lg:fixed max-lg:w-full max-lg:inset-0`}
        >
          <div className="fixed inset-0 bg-verde-950/40 backdrop-blur-md lg:hidden"></div>
          <ul className="text-white text-2xl lg:text-xl max-lg:divide-y-2 max-lg:divide-white/10 max-lg:z-50 max-lg:absolute max-lg:p-8 max-lg:w-full lg:flex lg:flex-wrap lg:gap-8 items-center lg:*:*:px-0 lg:*:*:py-2 *:*:p-4 *:*:block max-lg:*:*:rounded-2xl max-lg:*:*:hover:bg-white/10 lg:*:*:hover:underline lg:*:*:hover:underline-offset-8">
            <li className="animate-slide-in opacity-0 animate-1">
              <a href="#acomodacoes">Acomodações</a>
            </li>
            <li className="animate-slide-in opacity-0 animate-2">
              <a href="#eventos">Eventos</a>
            </li>
            <li className="animate-slide-in opacity-0 animate-3">
              <a href="#experiencias">Experiências</a>
            </li>
            <li className="animate-slide-in opacity-0 animate-4">
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => toggleMenu()}
          className="bg-verde-400 hover:bg-verde-400/60 transition-all duration-300 text-verde-900 py-2 px-4 flex items-center gap-3 rounded-full lg:hidden cursor-pointer"
        >
          Menu
          <span className="h-3 w-4 flex flex-col justify-between *:h-0.5 *:rounded-md *:bg-verde-800">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </header>

      <main className="container mx-auto px-3">
        <div className="text-white relative pt-96 px-8 pb-8 max-sm:pt-12 max-sm:px-4 bg-gradient-to-t from-verde-950/80 rounded-2xl overflow-hidden">
          {/* <Image
            src={Floresta}
            alt="Hero Forest"
            className="absolute inset-0 -z-10 size-full object-cover"
          /> */}

          <video
            src="/video_chuva.mp4"
            width={1280}
            height={720}
            muted
            autoPlay
            playsInline
            loop
            className="absolute inset-0 -z-10 size-full object-cover"
          ></video>

          <div className="sm:bg-verde-950 bg-verde-950/60 flex flex-col items-start gap-2 p-4 sm:inline-flex sm:flex-row sm:gap-8 mb-8 sm:items-center sm:py-1 sm:pr-1 sm:pl-4 rounded-xl sm:rounded-full">
            Vagas para o feriado de 7 de setembro
            <a
              href="#"
              className="bg-verde-400 text-verde-900 py-2 px-4 inline-block rounded-full"
            >
              Reserve Hoje
            </a>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl mb-8 sm:mb-20 max-w-screen text-balance">
            Venha Experimentar a Vida na Floresta
          </h1>

          <div className="text-sm sm:flex justify-between items-end gap-8">
            <p className="max-sm:mb-4">
              Melhores locais para visitar{" "}
              <a
                href="#"
                className="underline decoration-2 underline-offset-4 hover:no-underline"
              >
                {" "}
                2049
              </a>
            </p>
            <div className="">
              <p className="uppercase mb-2">Recomendado por</p>
              <p className="flex items-center gap-4 text-lg">
                <Image src={Wildbeast} alt="Wildbeast" className="w-36" />
                <span> | </span>
                Revista Nacional
              </p>
            </div>
          </div>
        </div>
      </main>

      <section className="container mx-auto px-3 grid lg:grid-cols-[2fr_3fr] gap-8 mb-12 sm:mb-16 pt-16">
        <div className="content-end bg-[url(../img/padrao.svg)] bg-no-repeat bg-contain bg-left-bottom">
          <h2 className="text-white mb-8 text-4xl font-serif lg:text-5xl">
            Refúgio Natural
          </h2>
          <ul className="text-gray-200 *:flex *:items-center *:gap-4 space-y-4 sm:text-xl">
            <li>
              <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
              Experimente a natureza em sua forma mais pura e selvagem.
            </li>
            <li>
              <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
              Conecte-se com a natureza e desfrute de uma experiência única.
            </li>
            <li>
              <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
              Desconecte-se do mundo e conecte-se com a natureza.
            </li>
            <li>
              <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
              Observe a vida selvagem em seu habitat natural.
            </li>
            <li>
              <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
              Escolha sua aventura e explore a floresta.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-[2fr_1.3fr] gap-4 sm:gap-8">
          <div className="col-span-full grid *:col-start-1 *:row-start-1">
            <Image
              src={Casa1}
              alt="Casa 1"
              className="w-full h-60 object-cover rounded-xl"
            />
            <span className="uppercase self-start m-2 justify-self-end text-white rounded-full bg-verde-950/60 px-4 py-2 text-sm/none">
              Ruby
            </span>
          </div>

          <div className="grid *:col-start-1 *:row-start-1">
            <Image
              src={Casa2}
              alt="Casa 2"
              className="size-full object-cover rounded-xl"
            />
            <span className="uppercase self-start m-2 justify-self-end text-white rounded-full bg-verde-950/60 px-4 py-2 text-sm/none">
              Emerald
            </span>
          </div>

          <div className="grid *:col-start-1 *:row-start-1">
            <Image
              src={Casa3}
              alt="Casa 3"
              className="size-full object-cover rounded-xl"
            />
            <span className="uppercase self-start m-2 justify-self-end text-white rounded-full bg-verde-950/60 px-4 py-2 text-sm/none">
              Sapphire
            </span>
          </div>
        </div>
      </section>

      <section className="mb-12 sm:mb-16 py-12 sm:py-16 bg-verde-900">
        <div className="container mx-auto px-3">
          <p className="mb-4 text-center text-balance font-serif text-verde-200 uppercase tracking-widest text-sm">
            Conecte-se com a natureza
          </p>
          <h2 className="mb-8 text-white text-4xl sm:text-6xl text-center max-w-screen-md mx-auto">
            Cada som cada momento uma nova descoberta
          </h2>

          <div className="grid grid-cols-[repeat(3,minmax(300px,1fr))] overflow-x-auto pb-4 snap-x snap-mandatory gap-4 sm:gap-8">
            <div className="grid gap-4 snap-center bg-verde-800 p-6 sm:p-8 rounded-xl ">
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

            <div className="grid gap-4 snap-center bg-verde-800 p-6 sm:p-8 rounded-xl ">
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

            <div className="grid gap-4 snap-center bg-verde-800 p-6 sm:p-8 rounded-xl ">
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
          <div className="relative cursor-pointer overflow-hidden rounded-xl group">
            <Image
              src={Canoagem}
              alt="Canoagem"
              className="size-full object-cover rounded-xl group-hover:scale-110 transition-all duration-300"
            />

            <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-verde-950/80 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-white">Canoagem</span>
            </div>
          </div>

          <div className="relative cursor-pointer overflow-hidden rounded-xl group row-span-2">
            <Image
              src={ObservacaoNoturna}
              alt="Observação Noturna"
              className="size-full object-cover rounded-xl group-hover:scale-110 transition-all duration-300"
            />

            <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-verde-950/80 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-white">Observação Noturna</span>
            </div>
          </div>

          <div className="relative cursor-pointer overflow-hidden rounded-xl group">
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
          <div className="grid gap-4 bg-verde-900 p-6 sm:p-8 rounded-xl flex-1 sm:hover:-translate-y-2 transition-all duration-300">
            <div className="bg-verde-400 size-10 flex items-center justify-center rounded-full">
              <Image src={Manha} alt="Manhã" />
            </div>

            <h3 className="font-serif text-2xl text-white">Amanhecer</h3>

            <p className="text-gray-400">
              Desperte com o canto dos pássaros e o som da floresta acordando.
            </p>

            <span className="text-verde-300">05:40 - 07:00</span>
          </div>

          <div className="grid gap-4 bg-verde-900 p-6 sm:p-8 rounded-xl flex-1 sm:translate-y-12 sm:hover:translate-y-10 transition-all duration-300">
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

          <div className="grid gap-4 bg-verde-900 p-6 sm:p-8 rounded-xl flex-1 sm:hover:-translate-y-2 transition-all duration-300">
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

      <section className="container mx-auto px-3 mb-12 sm:mb-16 grid lg:grid-cols-2 gap-8">
        <div>
          <h1 className="font-serif text-4xl text-verde-300 mb-4">
            Nossos Contatos
          </h1>

          <p className="text-gray-200 text-balance mb-8">
            Entre em contato conosco para reservas, informações sobre eventos e
            experiências.
          </p>

          <div className="grid gap-4">
            <div>
              <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>

              <h2 className="text-2xl mb-2 text-verde-300 font-serif">Base</h2>

              <p className="text-gray-300">
                Rua da Floresta, 123 - Floresta, SP
              </p>
            </div>

            <div>
              <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>

              <h2 className="text-2xl mb-2 text-verde-300 font-serif">Email</h2>

              <p className="text-gray-300">contato@forest.com</p>
            </div>

            <div>
              <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>

              <h2 className="text-2xl mb-2 text-verde-300 font-serif">
                Telefone
              </h2>

              <p className="text-gray-300">+55 11 1234-5678</p>
            </div>
          </div>
        </div>

        <form
          action=""
          className="grid gap-4 rounded-xl bg-verde-900 shadow-2xl p-4 lg:p-8"
        >
          <div className="grid gap-1">
            <label htmlFor="nome" className="text-white">
              Nome
            </label>

            <input
              type="text"
              className="rounded-md border-2 border-verde-800 bg-verde-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-verde-400 focus:border-verde-900 placeholder:text-verde-900"
              id="nome"
              name="nome"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1">
              <label htmlFor="email" className="text-white">
                Email
              </label>

              <input
                type="email"
                className="rounded-md border-2 border-verde-800 bg-verde-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-verde-400 focus:border-verde-900 placeholder:text-verde-900"
                id="email"
                name="email"
              />
            </div>

            <div className="grid gap-1">
              <label htmlFor="telefone" className="text-white">
                Telefone
              </label>

              <input
                type="tel"
                className="rounded-md border-2 border-verde-800 bg-verde-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-verde-400 focus:border-verde-900 placeholder:text-verde-400/50"
                id="telefone"
                name="telefone"
                placeholder="(11) 1234-5678"
              />
            </div>
          </div>

          <div className="grid gap-1">
            <label htmlFor="mensagem" className="text-white">
              Mensagem
            </label>

            <textarea
              className="rounded-md border-2 border-verde-800 bg-verde-800 p-2 text-white resize-none focus:outline-none focus:ring-2 focus:ring-verde-400 focus:border-verde-900"
              id="mensagem"
              name="mensagem"
              rows={5}
            ></textarea>
          </div>

          <button className="bg-verde-400 place-self-start text-verde-900 py-2 px-4 inline-block rounded-full cursor-pointer">
            Enviar
          </button>
        </form>
      </section>

      <section className="container mx-auto px-3 mb-12 sm:mb-16">
        <ul className="flex flex-col items-center justify-center py-4 max-sm:divide-y-2 max-sm:divide-verde-900 *:p-4 sm:flex-row sm:gap-8 sm:border-b-2 sm:border-t-2 sm:border-verde-900 sm:py-8 *:*:max-h-8">
          <li>
            <Image src={Caravan} alt="Caravan" className="w-full" />
          </li>
          <li>
            <Image src={Wildbeast} alt="Wildbeast" className="w-full" />
          </li>
          <li>
            <Image src={Lescone} alt="Lescone" className="w-full" />
          </li>
          <li>
            <Image src={Dogs} alt="Dogs" className="w-full" />
          </li>
          <li>
            <Image src={Surfbot} alt="Surfbot" className="w-full" />
          </li>
        </ul>
      </section>

      <footer className="container pb-8 mx-auto">
        <div className="bg-verde-900 grid gap-4 lg:grid-cols-2 p-6 sm:p-12 rounded-2xl mb-8">
          <div className="flex gap-8 max-sm:flex-col max-sm:gap-4">
            <div>
              <h3 className="text-white font-serif text-xl mb-4">Endereço</h3>
              <p className="text-gray-400">
                Rua da Floresta, 123 - Floresta, SP
                <br />
                CEP: 12345-678
              </p>
            </div>

            <div>
              <h3 className="text-white font-serif text-xl mb-4">Contato</h3>
              <p className="text-gray-400">
                contato@forest.com
                <br />
                +55 11 1234-5678
              </p>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <Image src={Logo} alt="Logo" className="mb-4" />
            <p className="text-gray-400">Conecte-se com a natureza</p>
          </div>
        </div>

        <div className="text-gray-400 flex items-center justify-between gap-8 text-sm max-sm:flex-col-reverse">
          <p>© 2025 Forest. Todos os direitos reservados.</p>

          <ul className="flex gap-8">
            <li>
              <a href="#" className="hover:text-verde-300">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-verde-300">
                Linkedin
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-verde-300">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
