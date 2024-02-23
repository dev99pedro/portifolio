import { WorkWrapperContainer, WorkWrapper, WorkTitle, WorkDiv, WorkGithubButton, WorkGithubButtonText } from './Works.style'
import WorkItens from './WorkItens/WorkItens'
import ImagesExports from '../ImagesExport/ImagesExport'



const Work = () => {



    return (

        <WorkWrapperContainer id="works">
            <WorkWrapper>
                <WorkTitle>
                    Works
                </WorkTitle>

                <WorkDiv>
                    <WorkItens title="Blog FullStack" techs="React, Sass, Node, Mysql" subtitle="Gerenciador de Tasks, com sessão de comentários ativa, onde os usuários conseguem se comunicar para planejar um melhor direcionamento para o problema, ajuste ou recurso novo que estejam precisando." path="https://fullstackblogpedro.vercel.app/"  background={ImagesExports.NodeProject}></WorkItens>
                    <WorkItens title="Gerenciador de Tasks" techs="React, ContexApi" subtitle="Gerenciador de Tasks, com sessão de comentários ativa, onde os usuários conseguem se comunicar para planejar um melhor direcionamento para o problema, ajuste ou recurso novo que estejam precisando." path="https://gerenciador-de-tasks-com-chat.vercel.app/"  background={ImagesExports.Task}></WorkItens>
                    <WorkItens title="Space Navigation" techs="React, ContexApi, StyledComponents" subtitle="Projeto interativo com tema espacial onde o usuario viaja pelo site e obtém conhecimentos sobre planetas, pilotos e tecnologias usadas nas estações espaciais. Dados retornados de uma api (: " path="https://dev99pedro.github.io/SpaceTime" background={ImagesExports.ReactProject}></WorkItens>
                  
                </WorkDiv>
                <WorkDiv>
                <WorkItens title="Loja de compras" techs="React, Sass, ContexApi" subtitle="Página estilo eccomerce com alguns produtos que são adicionados ao carrinho e soma o valor total dos produtos no final na pagina de compra" path="https://projeto-eccomerce-att.vercel.app/" background={ImagesExports.Loja}></WorkItens>
                    <WorkItens title="Job Filter" techs="React, Sass" subtitle="Sistema onde é efetuado um filtro de busca de vagas, que pode ser filtrado pelas características e nível de experiência da vaga." path="https://filter-job.vercel.app/" background={ImagesExports.FilterJoB}></WorkItens>
                    <WorkItens title="Eccomerce React" techs="React, ContexApi,Css" subtitle="Landing Page de um Eccomerce, onde ao selecionar a quantidade de produtos, faz a soma e mostra o valor da quantia , multiplicado pelo valor do produto." path="https://dev99pedro.github.io/EccomerceReact" background={ImagesExports.EccomerceProject}></WorkItens>
                </WorkDiv>
                <WorkGithubButtonText href='https://github.com/dev99pedro' target="_blank">
                    See more on Github
                </WorkGithubButtonText>
            </WorkWrapper>
        </WorkWrapperContainer>

    )
}

export default Work