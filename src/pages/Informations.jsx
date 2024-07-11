import { React, useRef } from 'react'

/* Renderizar a animação quando o scrool for acionado */
import { useInView } from 'react-intersection-observer';

// Image 
import foto from '../assets/foto_jamille.jpeg'

export const Informations = () => {
  const { ref, inView } = useInView();
  const animationRef = useRef();

  return (
    <article ref={ref} class="flex justify-center items-center flex-col gap-10 mt-5 lg:flex-row lg:justify-evenly">
      <section>
        <img class="h-clamp w-clamp rounded-tr-full rounded-bl-full" src={foto} alt="foto" />
      </section>

      <section 
        ref={animationRef}
        class={`flex flex-col gap-5 text-center lg:gap-10 ${inView ? 'animate-write-right opacity-100' : 'opacity-0'}`}>
        
        <div>
          <h1 class="lg:text-[35px]">Olá, meu nome é <span class="text-button_color">Jamille Araujo</span></h1>
          <p>Desenvolvedora Front-end</p>
        </div>
        <div class="flex gap-2 justify-center items-center">
          <button class="bg-button_color h-10 w-full rounded-lg">Download CV</button>
          <button class="bg-button_color h-10 w-full rounded-lg" >Entrar em Contato</button> 
        </div>
      </section>
    </article>
  )
}

export default Informations