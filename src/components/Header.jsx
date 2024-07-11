import React from 'react'

// Js
import { Open } from '../utils/Hamburguer'; // Importando a função do arquivo utils.js
import { Close } from '../utils/Hamburguer'; // Importando a função do arquivo utils.js

// Icons
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

//class="hidden md:flex flex-row gap-5 "
const Header = () => {
  return (
    <nav id="nav" class="flex flex-row justify-end m-5 md:mx-20 md:my-10 md:justify-center">
      <button id="button" class="flex text-white cursor-pointer md:hidden" >
        <IoIosMenu id="open_button" class="h-[50px] w-[50px]" onClick={Open} />
        <MdClose id="close_button" class="hidden h-[50px] w-[50px]" onClick={Close} />
      </button>

      <ul class="hidden md:flex md:flex-row md:items-center md:gap-5">
        <li>Sobre mim</li>
        <li>Projetos</li>
        <li>Habilidades</li>
      </ul>

      <ul id="menu" class="hidden flex-col justify-center items-center gap-5 h-[100vh] w-auto md:hidden fixed">
        <li>Sobre mim</li>
        <li>Projetos</li>
        <li>Habilidades</li>
      </ul>
    </nav>
  )
}

export default Header