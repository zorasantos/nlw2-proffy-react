import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/36997341?s=460&u=14ae5b46f387092601e12e64a105b6895198cb6a&v=4" alt="Zora Santos" />
        <div>
          <strong>Zora Santos</strong>
          <span>Filosofia</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta praesentium.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, asperiores recusandae autem similique quas nisi doloremque rerum odio minus repellat. Ea eos vel iste amet perspiciatis! Eveniet nostrum laborum quas.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}
export default TeacherItem