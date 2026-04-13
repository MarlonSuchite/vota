import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const hero =
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export const Hero = () => {
  return (
    <section
      className="relative h-[calc(100vh-64px)] w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-[#1C1B1B]/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Contenido */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 text-left w-full"
      >
        {/* Título */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-black text-[#C8C6C5] leading-tight tracking-tight"
        >
          No solo veas películas…
          <span className="block mt-2 text-[#E9C349]">vota por las mejores</span>
        </motion.h1>

        {/* Descripción */}
        <motion.p
          variants={item}
          className="mt-6 text-xl md:text-2xl text-[#C8C6C5] max-w-2xl font-light opacity-90"
        >
          Califica, descubre y ayuda a crear el ranking definitivo del cine.
        </motion.p>

        {/* Botones */}
        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/movies"
              className="px-8 py-4 bg-[#E9C349] text-[#0F0F0F] font-bold rounded-lg transition-all"
            >
              Explorar películas
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/add-movie"
              className="px-8 py-4 border-2 border-[#C8C6C5]/30 text-[#C8C6C5] font-bold rounded-lg transition-all"
            >
              Agregar película
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
