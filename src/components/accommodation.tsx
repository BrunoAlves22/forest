import Image from "next/image";
import Casa1 from "../img/casa1.jpg";
import Casa2 from "../img/casa2.jpg";
import Casa3 from "../img/casa3.jpg";

export function Accommodation() {
  return (
    <>
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
    </>
  );
}
