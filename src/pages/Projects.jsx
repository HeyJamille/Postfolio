import React from 'react'

// Assets
import fundo_pizza from '../assets/fundo_pizza.jpg'

const Projects = () => {
  return (
    <article>
      <h2 class="text-center mb-5">Projetos</h2>

      <section class="flex flex-row flex-wrap justify-evenly text-center gap-10 lg:gap-5 ">
        <div class="bg-background-color p-5 h-70 w-full lg:w-80 hover:scale-105 delay-150 duration-300 cursor-pointer">
          <img src={fundo_pizza} alt="fundo_pizza"/>
          <h3 class="mt-1">Titulo do projeto</h3>
          <p>Tecnologias: HTML, CSS e JS.</p>
        </div>

        <div class="bg-background-color p-5 h-70 w-full lg:w-80 hover:scale-105 delay-150 duration-300 cursor-pointer">
          <img src={fundo_pizza} alt="fundo_pizza" />
          <h3 class="mt-1">Titulo do projeto</h3>
          <p>Tecnologias: HTML, CSS e JS.</p>
        </div>

        <div class="bg-background-color p-5 h-70 w-full lg:w-80 hover:scale-105 delay-150 duration-300 cursor-pointer">
          <img src={fundo_pizza} alt="fundo_pizza" />
          <h3 class="mt-1">Titulo do projeto</h3>
          <p>Tecnologias: HTML, CSS e JS.</p>
        </div>

        <div class="bg-background-color p-5 h-70 w-full lg:w-80 hover:scale-105 delay-150 duration-300 cursor-pointer">
          <img src={fundo_pizza} alt="fundo_pizza" />
          <h3 class="mt-1">Titulo do projeto</h3>
          <p>Tecnologias: HTML, CSS e JS.</p>
        </div>

        <div class="bg-background-color p-5 h-70 w-full lg:w-80 hover:scale-105 delay-150 duration-300 cursor-pointer">
          <img src={fundo_pizza} alt="fundo_pizza" />
          <h3 class="mt-1">Titulo do projeto</h3>
          <p>Tecnologias: HTML, CSS e JS.</p>
        </div>

        <div class="bg-background-color p-5 h-70 w-full lg:w-80 hover:scale-105 delay-150 duration-300 cursor-pointer">
          <img src={fundo_pizza} alt="fundo_pizza" />
          <h3 class="mt-1">Titulo do projeto</h3>
          <p>Tecnologias: HTML, CSS e JS.</p>
        </div>
      </section>
    </article>
  )
}

export default Projects