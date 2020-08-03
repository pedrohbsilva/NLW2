import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
function TeacherItem(){
  return (
    <article className="teacher-item">
    <header>
      <img src="https://images.unsplash.com/photo-1551584108-71b90930cfa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
      <div>
        <strong>
          Diego Fernandes 
        </strong>
        <span>
          Química
        </span>
      </div>
    </header>
    <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br/>
      Apaixonado por explodir coisas em laboratório e por mudar a vida 
      das pessoas através de experiências.
    </p>
    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button"><img src={whatsappIcon} alt="whatsapp"/>Entrar em contato</button>
    </footer>
  </article>
  )
}

export default TeacherItem;