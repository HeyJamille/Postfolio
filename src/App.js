import './index.css';

// pages
import Menu from './components/Menu';
import Informations from './pages/Informations';
import About from './pages/About';
import Contatos from './pages/Contacts';
import Projetos from './pages/Projects';
import Habilidades from './pages/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Menu/>
      <main className="flex flex-col gap-20 mx-5 md:mx-20 xl:mx-30">
        <Informations/>
        <About/>
        <Contatos />
        <Projetos />
        <Habilidades />
      </main>
      <Footer />
    </>
  );
}

export default App;
