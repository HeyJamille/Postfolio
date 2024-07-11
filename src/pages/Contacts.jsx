import { React }from 'react'

/* Renderizar a animação quando o scrool for acionado */
import { useInView } from 'react-intersection-observer';

// Icons
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsTelephonePlusFill } from "react-icons/bs";

const Contacts = () => {
  const { ref, inView } = useInView();

  return (
    <article 
      ref={ref}
      class={`flex flex-col justify-center align-center ${inView ? 'animate-write-right opacity-100' : 'opacity-0'}`}
      >

      <h1 class="text-button_color text-center mb-10">Contatos</h1>

      <section class="flex justify-evenly flex-wrap gap-10"> 
        <section class="hover:scale-110 delay-150 duration-300">
          <a
            class="flex flex-col justify-center items-center text-center cursor-pointer" 
            href="https://github.com/HeyJamille"
          >            
            <div> 
              <FaGithub class="h-14 w-14 text-center" />
            </div>            
            <div> 
              <h3>Github</h3>
              <p>HeyJamille</p>
            </div>
          </a>
        </section>

        <section class="hover:scale-110 delay-150 duration-300">
          <a
            class="flex flex-col justify-center items-center text-center cursor-pointer" 
            href="https://www.instagram.com/hey_jamillee/"
          >     
            <div>
              <FaInstagram class="h-14 w-14 text-center" />
            </div>
            <div> 
              <h3>Instagram</h3>
              <p>Hey_Jamille</p>
            </div>
          </a>
        </section>

        <section class="hover:scale-110 delay-150 duration-300">
          <a
            class="flex flex-col justify-center items-center text-center cursor-pointer" 
            href="https://www.linkedin.com/in/jamille-araujo-1060a01a3/"
          >     
            <div>
              <FaLinkedin class="h-14 w-14 text-center" />
            </div>
            <div> 
              <h3>Linkedin</h3>
              <p>Jamille Araujo</p>
            </div>
          </a>
        </section>
          
        <section class="hover:scale-110 delay-150 duration-300">
          <a
            class="flex flex-col justify-center items-center text-center cursor-pointer" 
            href="https://wa.me/5585999063736"
          >     
            <div>
              <BsTelephonePlusFill class="h-14 w-14 text-center" />
            </div>
            <div> 
              <h3>Telefone</h3>
              <p>(85) 999063736</p>
            </div>
          </a>
        </section>   
      </section>        
    </article>
  )
}

export default Contacts