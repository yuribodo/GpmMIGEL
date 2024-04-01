import React from 'react'

import './Card.css'
import Erick from '../../../assets/Erick.jpg'
import Iarley from '../../../assets/Iarley.jpg'
import Grazi from '../../../assets/Grazi.jpg'
import Mario from '../../../assets/Mario.jpg'
import Luan from '../../../assets/Luan.jpg'


const Card = () => {
  return (
    <div className='caixa__cards'>
        <div className='container_card'>
            <img className='foto__card' src={Mario} alt="foto do bodó" />

            <h1 className="nome__card">Mario </h1>

            <p className="texto__card">Responsabilidade:</p>
            <p className='texto__card'> Líder do projeto, levantamento de requisitos e programação do site (Navbar, Hero, Section e Responsividade)</p>

        </div>

        <div className='container_card'>
            <img className='foto__card' src={Grazi} alt="foto Grazi linda" />

            <h1 className="nome__card">Graziele</h1>

            <p className="texto__card">Responsabilidade:</p>
            <p className='texto__card'>Programação da lading page(Equipe e responsabilidade)</p>

        </div>

        <div className='container_card'>
            <img className='foto__card' src={Iarley} alt="Foto iarley" />

            <h1 className="nome__card">Iarley</h1>

            <p className="texto__card">Responsabilidade:</p>
            <p className='texto__card'>Programação da lading page(Analise de requisitos) </p>

        </div>

        <div className='container_card'>
            <img className='foto__card' src={Erick} alt="Foto Erick" />

            <h1 className="nome__card">Erick</h1>

            <p className="texto__card">Responsabilidade:</p>
            <p className='texto__card'>Programação da lading page(Descrição do problema e proposta de MER)</p>

        </div>

        <div className='container_card'>
            <img className='foto__card' src={Luan} alt="foto luan" />

            <h1 className="nome__card">Luan</h1>

            <p className="texto__card">Responsabilidade:</p>
            <p className='texto__card'> Programação da lading page(Proposta de MER)</p>

        </div>


    </div>
  )
}

export default Card