import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import IndexOption from "./IndexOption";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
      <a
        href="#inicio"
        className="bg-gradient-to-r from-red-400 to-amber-600 bg-clip-text text-3xl font-extrabold text-transparent"
      >
        JMC
      </a>

        {/* Menú escritorio */}
        <ul className="hidden md:flex gap-6">
          <li><IndexOption section="inicio" >Inicio</IndexOption></li>
          <li><IndexOption section="sobre">Sobre mí</IndexOption></li>
          <li><IndexOption section="contacto">Contacto</IndexOption></li>
        </ul>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden text-2xl cursor-pointer px-3 py-2 rounded-md"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden backdrop-blur-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li><IndexOption section="inicio" >Inicio</IndexOption></li>
            <li><IndexOption section="sobre" >Sobre mí</IndexOption></li>
            <li><IndexOption section="contacto" >Contacto</IndexOption></li>
          </ul>
        </div>
      )}
    </header>
  );
}