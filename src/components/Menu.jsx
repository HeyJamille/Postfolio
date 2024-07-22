import React, { useState, useEffect } from 'react';

// Icons
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

// Funções
import { Open, Close } from '../utils/Hamburguer'; // Importe suas funções corretamente

const Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="nav" className={`flex flex-row justify-between p-5 md:justify-center md:w-full ${isScrolled ? 'md:fixed md:border-white md:border-b-[1px] md:backdrop-filter md:backdrop-blur-lg z-10' : ''}`}>
      <button id="button" className="flex text-white cursor-pointer md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <MdClose id="close_button" className="h-[50px] w-[50px]" />
        ) : (
          <IoIosMenu id="open_button" className="h-[50px] w-[50px]" />
        )}
      </button>

      <ul className="hidden md:flex md:flex-row md:justify-center md:gap-5">
        <MenuItem id="#about" text="Sobre Mim" />
        <MenuItem id="#projects" text="Projetos" />
        <MenuItem id="#skills" text="Habilidades" />
      </ul>

      <ul id="menu" className={`flex flex-col justify-center items-center gap-5 h-screen w-full md:hidden fixed top-0 left-0 bg-white shadow-lg transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <li><a href="#about" className="text-lg text-gray-800" onClick={toggleMenu}>Sobre mim</a></li>
        <li><a href="#projects" className="text-lg text-gray-800" onClick={toggleMenu}>Projetos</a></li>
        <li><a href="#skills" className="text-lg text-gray-800" onClick={toggleMenu}>Habilidades</a></li>
      </ul>
    </nav>
  );
};

const MenuItem = ({ text, id }) => {
  return (
    <div className="relative group">
      <a href={id} className="text-white text-[25px]">
        {text}
      </a>
      <div className="w-full h-0.5 bg-[#cd51ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
    </div>
  );
};

export default Menu;
