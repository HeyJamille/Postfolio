import React from 'react'

/* Renderizar a animação quando o scrool for acionado */
import { useInView } from 'react-intersection-observer';

// Icons
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiCsharp } from "react-icons/si";

const Skills = () => {
  const { ref, inView } = useInView();

  return (
    <article
      id="skills" 
      ref={ref} 
      className={`mb-20 xl:ml-40 xl:mr-40 ${inView ? 'animate-write-right opacity-100' : 'opacity-0'}`}
    >
      <h1 className="text-[#cd51ff] text-center mb-5">Habilidades</h1>
      
      <section className="flex justify-evenly flex-wrap gap-5">
        <SkillIcon icon={<IoLogoHtml5 className="bg-background-color h-20 w-20 p-2 cursor-pointer" />} text="HTML5" />
        <SkillIcon icon={<IoLogoCss3 className="bg-background-color h-20 w-20 p-2 cursor-pointer" />} text="CSS" />
        <SkillIcon icon={<IoLogoJavascript className="bg-background-color h-20 w-20 p-2 cursor-pointer" />} text="JavaScript" />
        <SkillIcon icon={<FaReact className="bg-background-color h-20 w-20 p-2 cursor-pointer" />} text="React" />
        <SkillIcon icon={<SiTailwindcss className="bg-background-color h-20 w-20 p-2 cursor-pointer" />} text="TailwindCss" />
        <SkillIcon icon={<SiCsharp className="bg-background-color h-20 w-20 p-2 cursor-pointer" />} text="C#" />
      </section>
        
    </article>
  )
}

const SkillIcon = ({ icon, text }) => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <div
      className="relative transform hover:scale-105 transition-transform duration-300"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {icon}
      {isHover && (
        <span className="absolute bottom-0 bg-black text-white text-center p-2 rounded-md">
          {text}
        </span>
      )}
    </div>
  );
}

export default Skills