import React from 'react'
import './DescricaoProblema.css'
import problemasolução from '../../assets/problemasolucao.jpg';

const DescricaoProblema = () => {
  return (
    <div class="fadeInUp-animation">  
      <h1 class="texto">Problema</h1>
      <p class="paragrafo"> O Grupo de Pesquisa GP Mecatrônica realiza projetos voltados <br /> à robótica educacional,
                           à manipulação de resíduos eletrônicos, <br /> à compostagem doméstica, à inserção de meninas
                           no campo <br /> científico, dentre muitos outros projetos, no entanto, no entanto, <br /> enfrenta um
                           desafio significativo de visibilidade. Existe uma <br /> lacuna considerável entre as realizações
                           e inovações ocorridas <br /> dentro do grupo e o conhecimento externo sobre essas iniciativas.<br /> A falta 
                           de divulgação eficaz limita o impacto potencial dos projetos, <br />impedindo o conhecimento,
                           colaborações e reconhecimento externo. <br /> A ausência de uma plataforma de divulgação eficiente resulta em um <br />
                           desconhecimento generalizado sobre os projetos e conquistas do GP <br />Mecatrônica fora do grupo, impede  
                           a atração de colaboradores externos <br /> interessados nos temas abordados pelo grupo e alunos que tenham <br /> interesse em
                           participar de projetos. A colaboraçãointerdisciplinar é <br /> crucial para o avanço da pesquisa, e a falta de visibilidade
                           pode limitar <br /> as oportunidades. </p >

                           <img src={problemasolução} alt="Descrição da imagem" class="imagemproblema" />                     

      <h1>Solução Proposta</h1> 

      <p class="proposta">Nossa solução para este problema é a construção de um web <br /> site que servira como repositorio para divulgação dos projetos <br /> realizados pelo grupo de pesquisa e um clipping das noticias relacionadas.

      </p>
      
    </div>)
}

export default DescricaoProblema