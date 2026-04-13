import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Contenedor principal para toda la aplicación con color base oscuro */}
      <div className="min-h-screen bg-[#1C1B1B] text-[#C8C6C5] font-sans flex flex-col">
        <Header />

        {/* 'main' es el wrapper de donde se inyectan las vistas de las páginas */}
        <main className="flex-grow">
          <AppRouter />
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
