import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Accommodation } from "@/components/accommodation";
import { Events } from "@/components/events";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Accommodation />

      <Events />

      <Experience />

      <Contact />

      <Footer />
    </>
  );
}
