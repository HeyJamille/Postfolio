import { React, useRef } from 'react'

/* Renderizar a animação quando o scrool for acionado */
import { useInView } from 'react-intersection-observer';

// Image 
import foto from '../assets/foto_jamille.jpeg'

export const Informations = () => {
  const { ref, inView } = useInView();
  const animationRef = useRef();

  return (
    <article ref={ref} className="flex justify-center items-center flex-col gap-10 mt-5 lg:flex-row lg:justify-evenly">
      <section>
        <img className="h-clamp w-clamp rounded-3xl" src={foto} alt="foto" />
      </section>

      <section 
        ref={animationRef}
        className={`flex flex-col gap-5 text-center lg:gap-10 ${inView ? 'animate-write-right opacity-100' : 'opacity-0'}`}>
        
        <div>
          <h1>Olá, meu nome é <span className="text-[#cd51ff]">Jamille Araujo</span></h1>
          <p>Desenvolvedora Front-end</p>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <button className="h-10 w-full rounded-lg bg-button_color">Download CV</button>
          <button className="h-10 w-full rounded-lg bg-button_color" >Entrar em Contato</button> 
        </div>
      </section>
    </article>
  )
}

export default Informations