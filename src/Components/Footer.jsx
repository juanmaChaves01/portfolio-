export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1314] py-6 text-center text-white">
      <p className="px-20">© {year} Juan Manuel Chaves. Todos los derechos reservados.</p>


    </footer>
  );
}