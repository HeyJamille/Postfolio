import { React, useState, useEffect } from 'react'

// Js
import { Open } from '../utils/Hamburguer'; // Importando a função do arquivo utils.js
import { Close } from '../utils/Hamburguer'; // Importando a função do arquivo utils.js

// Icons
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

//class="hidden md:flex flex-row gap-5 "
const Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav id="nav" class={`flex flex-row justify-end p-5 md:justify-center md:w-[100%]  ${isScrolled ? 'md:fixed md:border-white md:border-b-[1px] md:backdrop-filter md:backdrop-blur-lg z-10' : ''}`}>
      <button id="button" class="flex text-white cursor-pointer md:hidden" >
        <IoIosMenu id="open_button" class="h-[50px] w-[50px]" onClick={Open} />
        <MdClose id="close_button" class="hidden h-[50px] w-[50px]" onClick={Close} />
      </button>

      <ul class="hidden md:flex md:flex-row md:justify-center md:gap-5">
        <MenuItem text="Sobre Mim" />
        <MenuItem text="Projetos" />
        <MenuItem text="Habilidades" />
      </ul>

      <ul id="menu" class="hidden flex-col justify-center items-center gap-5 h-[100vh] w-auto md:hidden fixed">
        <li>Sobre mim</li>
        <li>Projetos</li>
        <li>Habilidades</li>
      </ul>
    </nav>
  )
}

const MenuItem = ({ text }) => {
  return (
    <div class="relative group">
      <a href="#" class="text-white text-MenuItem">
        {text}
      </a>
      <div class="w-full h-0.5 bg-button_color transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
    </div>
  );
};

export default Menu