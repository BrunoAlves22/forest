import Image from "next/image";
import Logo from "../img/forest.svg";

export function Footer() {
  return (
    <>
      <footer className="container pb-8 mx-auto px-3">
        <div
          data-aos="fade-down"
          data-aos-delay="200"
          className="bg-verde-900 grid gap-4 lg:grid-cols-2 p-6 sm:p-12 rounded-2xl mb-8"
        >
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
