export const AboutSection = () => {
  return (
    <section className="relative bg-[#1C1B1B] py-32 px-6 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Resplandor difuminado inmenso cubriendo la sección por detrás */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] max-w-[1200px] h-[600px] bg-[#E9C349]/10 rounded-[50%] blur-[120px] pointer-events-none -z-0"></div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-[#C8C6C5] tracking-tight drop-shadow-md">
          Tu opinión es lo que define el ranking
        </h2>

        <p className="mt-6 text-[#A1A1A1] text-lg md:text-xl font-light drop-shadow-sm">
          Califica películas, descubre tendencias y ayuda a destacar lo mejor del cine.
        </p>
      </div>
    </section>
  );
};
