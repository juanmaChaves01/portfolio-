import fotoPerfil from "../assets/foto1.webp";

export default function About() {
  return (
    <section
      id="sobre"
      className="flex min-h-screen items-center justify-center px-6 py-20"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row">
        <img
          src={fotoPerfil}
          alt="Foto de perfil"
          className="h-64 w-64 rounded-full object-cover shadow-lg"
        />

        <div className="max-w-xl text-center md:text-left">
          <h2 className="mb-4 text-4xl font-bold  text-amber-700">Sobre mí</h2>

          <p className="mb-4 text-lg">
            Hola, soy Juan Manuel. Me apasionan las computadoras, el desarrollo web,
            las redes y la tecnología en general.
          </p>
          <p className="mb-4 text-lg">
            Estoy estudiando la carrera de Licenciatura en Informática en la Universidad Nacional de La Plata (UNLP) y me encanta aprender nuevas tecnologías y mejorar mis habilidades en programación.
          </p>
          <p className="mb-4 text-lg">
            Actualmente estoy aprendiendo React, Tailwind CSS y herramientas
            modernas del ecosistema JavaScript para construir aplicaciones web
            rápidas, escalables y atractivas.
          </p>
        </div>
      </div>
    </section>
  );
}