"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "../img/forest.svg";

export function Header() {
  const [temperature, setTemperature] = useState<number>(25);
  const [time, setTime] = useState<string>("☀️");
  const [date, setDate] = useState<string>("Segunda");
  const [menu, setMenu] = useState<boolean>(false);

  function toggleMenu() {
    setMenu(!menu);
  }

  const random = Math.floor(Math.random() * 10) + 20;

  useEffect(() => {
    const dateTime = new Date();
    setTemperature(random);
    setTime(random < 25 ? `🌧️` : "☀️");
    setDate(dateTime.toLocaleDateString("pt-BR", { weekday: "long" }));
  }, [random]);
  return (
    <>
      <div className="container px-3 mt-4 flex justify-center md:justify-start mx-auto">
        <div className="inline-flex items-center rounded-md bg-verde-900">
          <div className="relative">
            <span className="absolute inline-flex -left-1 h-full w-full animate-ping rounded-full bg-verde-200 opacity-75"></span>
            <span className="size-2 bg-verde-300 rounded-full block relative -left-1"></span>
          </div>
          <div className="flex text-verde-300 divide-x-2 divide-verde-800 *:px-4 *:py-2">
            <div className="capitalize">{date}</div>
            <div>{temperature}°</div>
            <div>{time}</div>
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
    </>
  );
}
