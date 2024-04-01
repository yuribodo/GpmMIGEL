import React from 'react'
import './AnaliseRequisitos.css'

const AnaliseRequisitos = () => {
  return (
    <div class="fadeInUp-animation">
      <h1 class="analiserequisitos">Análise de Requisitos</h1>
      <p class="requisitosfun"><strong>Requisitos Funcionais</strong><br/>
            <br/>
            1. Barra de Navegação: O sistema terá uma barra de navegação que direciona para outras páginas:<br/> “Quem somos?”, “O que fazemos?”,
            “História do Grupo”, “Projetos”, “Notícias”.<br/> 
            <br/>
            2. Quem Somos: Essa página irá descrever sobre o grupo de pesquisa,
            os membros do<br/>grupo e informações de contato entre outros.<br/> 
            <br/>
            3. O que fazemos: Essa página irá descrever um pouco sobre os objetivos do grupo de pesquisa e os<br/>principais
            projetos em andamento, sua importância e contribuição para a Ciência.<br/> 
            <br/>
            4. História do Grupo: Essa página contará como o grupo de pesquisa surgiu, quem o fundou,
            como se manteve ao longo de todos os anos até aqui, etc.<br/> 
            <br/>
            5. Projetos: Essa página fará uma breve descrição de quais projetos estão em andamento no momento,
            dos projetos finalizados, e os resultados gerados por ele.<br/> 
            <br/>
            6. Notícias: Essa página servirá como um clipping das notícias do grupo de pesquisa,<br/>
            entrevistas para a Televisão, matérias relacionadas entre outros.<br/> 
            <br/>
            7. Página Inicial: Na página inicial terá uma breve descrição de todas as outras páginas acima, com links fazendo referência
            à essas páginas, onde terá uma descrição mais detalhada de cada uma delas.<br/> 
            <br/>
            8. Busca por projetos: o sistema terá uma “lupa” na qual deve ser possível buscar projetos de pesquisa por diferentes critérios,
            como área de pesquisa, título do projeto ou nome do pesquisador/orientador.<br/> 
            <br/>
            9. Visualização de Detalhes do Grupo: Os usuários devem poder visualizar detalhes completos do grupo de pesquisa,
            incluindo sua descrição, membros, projetos associados e contatos.<br/>
            <br/>
            <br/>
            </p>
      <p class="requisitosnaofun"><strong>Requisitos Não Funcionais</strong><br/>
            <br/>
            1. Usabilidade:A interface do usuário deve ser intuitiva e fácil de usar,
            garantindo uma experiência<br/>agradável para os usuários.<br/>
            <br/>
            2. Compatibilidade/Responsividade: O sistema deve ser compatível com diferentes dispositivos e navegadores web,<br/>
            garantindo uma experiência consistente em todas as plataformas.<br/>
            <br/>
            3. Escalabilidade: O sistema deve ser capaz de lidar com um aumento no número
            de usuários sem comprometer o desempenho.<br/>
            <br/>
            4. Disponibilidade: O sistema deve estar disponível 24 horas por dia, 7 dias por semana,
            com um mínimo de tempo<br/>de inatividade para manutenção programada.<br/>
            <br/>
            5. Desempenho de busca: O sistema de busca por projetos deve fornecer resultados precisos
            e relevantes com base<br/>nos critérios de pesquisa do usuário.<br/>
            <br/>
            6. Indexação eficiente: Os dados dos projetos devem ser indexados de forma
            eficiente para facilitar uma busca rápida e eficaz.<br/>
            <br/>
            7. Segurança da informação: Todas as informações dos usuários, como detalhes do grupo de pesquisa e projetos,
            devem<br/>ser protegidas contra acesso não autorizado, para que não haja a propagação de informações falsas.
            <br/>
      </p>
    </div>
  )               
}

export default AnaliseRequisitos