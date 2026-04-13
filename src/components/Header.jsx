import { NavLink, Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#1C1B1B]/80 border-b border-gray-800 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Marca */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-2xl font-black tracking-tight text-[#E9C349] hover:opacity-80 transition-opacity"
            >
              Vota
            </Link>
          </div>

          {/* Enlaces de navegación */}
          <nav className="flex space-x-6 md:space-x-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-[#E9C349]' : 'text-[#C8C6C5] hover:text-[#E9C349]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Inicio
                  {isActive && (
                    <span className="absolute -bottom-5 left-0 w-full h-0.5 bg-[#E9C349] rounded-full" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-[#E9C349]' : 'text-[#C8C6C5] hover:text-[#E9C349]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Películas
                  {isActive && (
                    <span className="absolute -bottom-5 left-0 w-full h-0.5 bg-[#E9C349] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          </nav>

          {/* Botones de usuario / acciones */}
          <div className="flex items-center space-x-4">
            <button className="px-5 py-2 text-sm font-semibold text-[#0F0F0F] bg-[#E9C349] rounded-full hover:bg-[#D5B03C] transition-all shadow-md hover:shadow-lg active:scale-95">
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
