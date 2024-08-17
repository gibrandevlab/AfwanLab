import "../assets/css/HeroSection.css";
import { EfekMengetik, DownloadButton } from "../js/ScriptHeroSection";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-400 via-blue-200 to-blue-50 pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40">
      {" "}
      <div className="relative z-10">
        <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          {/* Isi SVG */}
        </div>
      </div>
      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Afwan Gibran :
            <span className="text-blue-600"> Full Stack Developer</span>
          </h1>
          <EfekMengetik teks="End-to-end solutions, built with precision" />
          <div className="mt-10 flex items-center justify-center gap-x-6">
          <DownloadButton />

          </div>
        </div>
        <div className="relative mx-auto mt-10 max-w-lg"></div>
      </div>
    </section>
  );
};

export default HeroSection;
