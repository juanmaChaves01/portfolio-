import SocialButton from "./SocialButton";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="w-full max-w-2xl text-center">
        <h2 className="mb-4 text-4xl font-bold">
          Contacto
        </h2>

        <p className="mb-8">
          ¿Tienes alguna consulta o propuesta? Escríbeme.
        </p>

        <div className="space-y-4">
          <SocialButton
            nombre="Instagram"
            link="https://instagram.com/juanma_chaves"
          />
          <br />
          <SocialButton
            nombre="Whatsapp"
            link="https://wa.me/5492213586501"
          />
          <br />
          <SocialButton
            nombre="TikTok"
            link="https://tiktok.com/@juanmachaves01"
          />
        </div>   
      </div>
    </section>
  );
}