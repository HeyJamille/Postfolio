import React from 'react'

/* Renderizar a animação quando o scrool for acionado */
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const { ref, inView } = useInView();
  
  return (
    <article 
      ref={ref}
      className={`${inView ? 'animate-write-right opacity-100' : 'opacity-0'}`}
      >
      
      <h1 id="about" className="text-[#cd51ff] text-center mb-5">Sobre mim</h1>
      <p className="xl:px-40 text-justify ">Sou Jamille Araujo de Freitas e tenho 21 anos. Atualmente, estou cursando Ciência da Computação na Estácio de Sá e realizo estágio no IFCE Campus Maracanaú, onde também concluí o curso técnico em Informática. Possuo um conhecimento básico em inglês e espanhol. Estou em constante aprimoramento, com alguns cursos em andamento, como Desenvolvimento Web Completo e Design Gráfico com Figma. Estou entusiasmada em expandir meus horizontes no campo da tecnologia e em aplicar minhas habilidades em projetos desafiadores. </p>
    </article>
  )
}

export default About
