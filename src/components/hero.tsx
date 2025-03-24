"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Wildbeast from "../img/parceiros/wildbeast.svg";

export function Hero() {
  const [video, setVideo] = useState<string>("");
  const random = Math.floor(Math.random() * 10) + 20;

  useEffect(() => {
    setVideo(random < 25 ? "/video_chuva.mp4" : "/video_sol.mp4");
  }, [random]);

  if (!video) return null;
  return (
    <>
      <main className="container mx-auto px-3">
        <div className="text-white relative pt-96 px-8 pb-8 max-sm:pt-12 max-sm:px-4 bg-gradient-to-t from-verde-950/80 rounded-2xl overflow-hidden">
          {/* <Image
            src={Floresta}
            alt="Hero Forest"
            className="absolute inset-0 -z-10 size-full object-cover"
          /> */}

          <video
            src={video}
            width={1280}
            height={720}
            muted
            autoPlay
            playsInline
            loop
            className="absolute inset-0 -z-10 size-full object-cover animate-fade-in"
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
    </>
  );
}
