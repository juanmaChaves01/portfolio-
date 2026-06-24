import InstagramButton from "./SocialButton";


export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen">
      <div className="relative z-10 flex h-full flex-col items-center justify-center -translate-y-10 px-6">
        
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-medium animate-fade-up">
            Hola,
          </h1>

          <h2 className="text-5xl font-bold md:text-7xl">
            soy{" "}
            <span className="bg-gradient-to-r from-red-400 to-amber-600 bg-clip-text text-transparent">
              Juanma Chaves
            </span>
          </h2>
        </div>

        <div className="mt-6 max-w-2xl text-center">
          <p className="text-lg md:text-xl text-black">
            Estudiante de{" "}
            <span className="bg-gradient-to-r from-red-400 to-amber-600 bg-clip-text text-transparent font-semibold">
              Informática
            </span>{" "}
            en la Universidad Nacional de La Plata{" "}
            <span className="bg-gradient-to-r from-red-400 to-amber-600 bg-clip-text text-transparent font-semibold">
              (UNLP)
            </span>
            , interesado en desarrollo web, software y nuevas tecnologías.
          </p>
        </div>


        <a
          href="#sobre"
          className="absolute bottom-10 text-3xl animate-bounce"
        >
          ↓
        </a>

      </div>
    </section>
  );
}