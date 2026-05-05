import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { getPhotos } from "@/lib/gallery";

export default function Home() {
  const photos = getPhotos();
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        <Hero />
        <Stats />
        <section id="book" className="relative bg-sand-50">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="text-center mb-10">
              <span className="ornament">Le book</span>
              <h2 className="h-display mt-4 text-3xl md:text-5xl text-rose-900">
                Réalisations récentes
              </h2>
              <p className="mt-3 text-rose-900/65 max-w-xl mx-auto">
                Quelques-uns de mes derniers travaux. Tapez sur une photo pour
                la voir en grand.
              </p>
            </div>
            <Gallery photos={photos} />
          </div>
        </section>
        <Services />
        <section id="process">
          <Process />
        </section>
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
