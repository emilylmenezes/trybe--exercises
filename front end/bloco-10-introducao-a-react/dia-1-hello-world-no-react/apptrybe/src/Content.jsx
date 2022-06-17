import React from 'react';
import{ Component } from "react";
import './page.css'

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composição de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composição de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
]

class Content extends Component {
  render() {
    return(
    <div className="content">
    {conteudos.map((flag, index) => (
        <div key={ index } className='list-content'>
            <h4>{`O conteudo é: ${flag.conteudo}`}</h4>
            <p>{`status: ${flag.status}`}</p>
            <p>{`bloco: ${flag.bloco}`}</p>
        </div>
    ))}
    </div>
    );
  }
}

export default Content;