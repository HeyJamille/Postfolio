import React from 'react';
import fundo_pizza from '../assets/fundo_pizza.jpg';

const Projects = () => {
  const cards = [
    { img: fundo_pizza, title: 'Titulo do Projeto', paragraph: 'Tecnologias: HTML, CSS e JS.' },
    { img: fundo_pizza, title: 'Titulo do Projeto', paragraph: 'Tecnologias: HTML, CSS e JS.' },
    { img: fundo_pizza, title: 'Titulo do Projeto', paragraph: 'Tecnologias: HTML, CSS e JS.' },
    { img: fundo_pizza, title: 'Titulo do Projeto', paragraph: 'Tecnologias: HTML, CSS e JS.' },
    { img: fundo_pizza, title: 'Titulo do Projeto', paragraph: 'Tecnologias: HTML, CSS e JS.' },
    { img: fundo_pizza, title: 'Titulo do Projeto', paragraph: 'Tecnologias: HTML, CSS e JS.' },
  ];

  return (
    <article>
      <h1 id="projects" className="text-[#cd51ff] text-center mb-5">Projetos</h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {cards.map((card, index) => (
          <div key={index} className="bg-background_card flex flex-col gap-5 p-5 transform hover:scale-105 transition-transform duration-300">
            <img className="h-auto w-full" src={card.img} alt={card.title} />
            <div className="text-center"> 
              <h3>{card.title}</h3>
              <p>{card.paragraph}</p>
            </div>
          </div>   
        ))}
      </section>
    </article>
  );
};

export default Projects;
