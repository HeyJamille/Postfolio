import React, { useState, useEffect } from 'react';
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="nav" className={`flex flex-row justify-between p-5 md:justify-center md:w-full ${isScrolled ? 'md:fixed md:border-white md:border-b-[1px] md:backdrop-filter md:backdrop-blur-lg z-10' : ''}`}>
      <button id="button" className="flex text-white cursor-pointer md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <MdClose id="close_button" className="h-[50px] w-[50px] z-20" />
        ) : (
          <IoIosMenu id="open_button" className="h-[50px] w-[50px]" />
        )}
      </button>

      <ul className="hidden md:flex md:flex-row md:justify-center md:gap-5">
        <MenuItem id="#about" text="Sobre Mim" />
        <MenuItem id="#projects" text="Projetos" />
        <MenuItem id="#skills" text="Habilidades" />
      </ul>

      <ul id="menu" className={`flex flex-col justify-center items-center gap-5 md:hidden fixed top-0 left-0 bg-[#171717] shadow-lg transition-transform transform z-10 ${isMenuOpen ? 'translate-x-0 duration-1000 h-screen w-full' : 'translate-x-full duration-1000 h-screen w-full'}`}>
        <MenuItem id="#about" text="Sobre Mim" className="text-lg text-white" onClick={toggleMenu}/>
        <MenuItem id="#projects" text="Projetos" className="text-lg text-white" onClick={toggleMenu}/>
        <MenuItem id="#skills" text="Habilidades" className="text-lg text-white" onClick={toggleMenu}/>
      </ul>
    </nav>
  );
};

const MenuItem = ({ text, id, onClick }) => {
  return (
    <div className="relative group">
      <a href={id} className="text-white text-[25px]" onClick={onClick}>
        {text}
      </a>
      <div className="w-full h-0.5 bg-[#cd51ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
    </div>
  );
};

export default Menu;
