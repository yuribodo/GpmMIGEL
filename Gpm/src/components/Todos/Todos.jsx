import React from 'react'
import Hero from '../Hero/Hero'
import PropostaMER from '../PropotaMER/PropostaMER'
import Equipe from '../Equipe/Equipe'
import DescricaoProblema from '../DescricaoProblema/DescricaoProblema'
import AnaliseRequisitos from '../AnaliseRequisitos/AnaliseRequisitos'

const Todos = () => {
  return (
    <div>
        <Hero/>
        <Equipe/>
        <DescricaoProblema/>
        <AnaliseRequisitos/>
        <PropostaMER/>
    </div>
  )
}

export default Todos