import Image from "next/image";

export default function Home() {

    return (
      <div className="text-white relative bg-[#080d1a] z-10">
          <Image src="/micro.jpg" alt="Arriére-plan" className="absolute object-cover -z-10" fill quality={100}/>
          <div className="md-auto bg-[#00000030] z-20 flex flex-col items-center justify-items-center min-h-dvh min-w-screen p-6 gap-16">
              <main className="mt-auto max-w-[1440px]">
                  <hgroup className="flex flex-col items-center sm:mt-[15rem] tracking-wider">
                      <h1 className="font-cormorant italic font-bold 2xl:text-8xl text-5xl text-center">L&#39;Avant-Scène</h1>
                      <p className="font-cormorant font-[500] italic 2xl:text-4xl text-2xl text-center">Espace de Création, Promotion et Préparation de Spectacles.</p>
                  </hgroup>
              </main>
              <footer className="lg:flex sm:justify-center w-full mt-auto max-w-[1440px] mb-14">
                  <div className="w-full flex flex-col md:flex-row justify-between">
                      <div className="md:w-1/2">
                          <h3 className="text-2xl pb-3 font-cormorant italic font-semibold">Présentation</h3>
                          <p className="text-sm font-montserrat max-w-[400px] lg:max-w-fit">Prévue pour ouvrir ses portes en 2025,
                              L&#39;Avant-Scène sera un espace unique et inspirant, dédié à l&#39;émergence artistique et à la diversité culturelle.
                              Dotée d&#39;une scène entièrement équipée en sonorisation, éclairage, projection vidéo et captation
                              audio-vidéo multi-piste, cette salle de 50 places assises ou 100 places debout servira de
                              laboratoire artistique, permettant aux créateurs de tester, ajuster et perfectionner leurs
                              oeuvres en amont de leurs tournées.
                          </p>
                      </div>
                      <div className="pt-3">
                          <h3 className="text-2xl pb-3 font-cormorant italic font-semibold">Contact</h3>
                          <div className="flex flex-col xl:flex-row md:flex-col gap-6">
                              <ul className="text-sm font-montserrat">
                                  <li className="hover:text-blue-400 hover:underline"><a href="tel:+32498624565">+32
                                      498 62 45 65</a></li>
                                  <li className="hover:text-blue-400 hover:underline"><a
                                      href="mailto:contact@avantscene.be">contact@avantscene.be</a></li>
                                  <li>Rue Roture 46/48, 4020 Liège</li>
                              </ul>
                          </div>
                      </div>
                      <div className="flex flex-row justify-items-center items-start">
                          <div className="h-24 w-24">
                              <Image src="/ardent.png" alt="Logo de Ardent Comedy" width={128} height={128}/>
                          </div>
                          <div className="h-24 w-24">
                              <Image src="/sonar.png" alt="Logo de Sonar" width={128} height={128}/>
                          </div>
                      </div>
                  </div>
              </footer>
          </div>
      </div>
    );
}
