import './index.css';

// pages
import Menu from './pages/Menu';
import Informations from './pages/Informations';
import About from './pages/About';
import Contatos from './pages/Contacts';
import Projetos from './pages/Projects';
import Habilidades from './pages/Skills';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <Menu/>
      <main class="flex flex-col gap-20 ml-5 mr-5 md:ml-20 md:mr-20 xl:ml-30 xl:mr-30">
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
