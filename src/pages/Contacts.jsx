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

  const contacts = [
    { link: 'https://github.com/HeyJamille', img: <FaGithub className="h-14 w-14 text-center"/> , app: 'GitHub', account: 'HeyJamille' },
    { link: 'https://www.instagram.com/hey_jamillee/', img: <FaInstagram className="h-14 w-14 text-center"/> , app: 'Instagram', account: 'Hey_Jamille' },
    { link: 'https://www.linkedin.com/in/jamille-araujo-1060a01a3/', img: <FaLinkedin className="h-14 w-14 text-center"/> , app: 'Linkedin', account: 'Jamille Araujo' },
    { link: 'https://wa.me/5585999063736', img: <BsTelephonePlusFill className="h-14 w-14 text-center"/> , app: 'Telefone', account: '(85) 999063736' },
  ]

  return (
    <article 
      ref={ref}
      className={`flex flex-col justify-center items-center ${inView ? 'animate-write-right opacity-100' : 'opacity-0'}`}
      >
      <h1 className="text-[#cd51ff] text-center mb-10 ">Contatos</h1>

      <section className="flex justify-evenly flex-wrap gap-10 md:gap-20"> 
        {contacts.map((contact, index) => (
          <div key={index} className="transform hover:scale-105 transition-transform duration-300">
            <a className="flex flex-col justify-center items-center text-center cursor-pointer" href={contact.link}>
              <div>{contact.img}</div>

              <div> 
                <h3>{contact.app}</h3>
                <p>{contact.account}</p>
              </div>
            </a>
          </div>
        ))}
      </section>
    </article>
  )
}

export default Contacts
