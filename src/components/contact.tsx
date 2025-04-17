import Image from "next/image";
import Wildbeast from "../img/parceiros/wildbeast.svg";
import Caravan from "../img/parceiros/caravan.svg";
import Dogs from "../img/parceiros/dogs.svg";
import Lescone from "../img/parceiros/lescone.svg";
import Surfbot from "../img/parceiros/surfbot.svg";

export function Contact() {
  return (
    <>
      <section className="container mx-auto px-3 mb-12 sm:mb-16 grid lg:grid-cols-2 gap-8">
        <div data-aos="fade-right">
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
          data-aos="fade-left"
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
          <li data-aos="fade-down" data-aos-delay="200">
            <Image src={Caravan} alt="Caravan" className="w-full" />
          </li>
          <li data-aos="fade-down" data-aos-delay="300">
            <Image src={Wildbeast} alt="Wildbeast" className="w-full" />
          </li>
          <li data-aos="fade-down" data-aos-delay="400">
            <Image src={Lescone} alt="Lescone" className="w-full" />
          </li>
          <li data-aos="fade-down" data-aos-delay="500">
            <Image src={Dogs} alt="Dogs" className="w-full" />
          </li>
          <li data-aos="fade-down" data-aos-delay="600">
            <Image src={Surfbot} alt="Surfbot" className="w-full" />
          </li>
        </ul>
      </section>
    </>
  );
}
