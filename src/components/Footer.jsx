import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#1C1B1B] border-t border-[#2A2A2A] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo / Brand */}
          <h2 className="text-xl font-semibold text-[#EAEAEA]">
            VOTA
          </h2>

          {/* Links */}
          <div className="flex gap-6 text-[#A1A1A1] text-sm">
            <Link to="/" className="hover:text-[#E9C349] transition">
              Inicio
            </Link>
            <Link to="/add-movie" className="hover:text-[#E9C349] transition">
              Agregar película
            </Link>
            <Link to="/register" className="hover:text-[#E9C349] transition">
              Registrar
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2A2A2A] my-6"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-[#6B6B6B]">
          © {new Date().getFullYear()} Vota. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
};
