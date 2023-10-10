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
                    <WorkItens title="Space Navigation" techs="React,ContexApi,StyledComponents" subtitle="Projeto interativo com tema espacial onde o usuario viaja pelo site e obtém conhecimentos sobre planetas, pilotos e tecnologias usadas nas estações espaciais. Dados retornados de uma api (: " path="https://dev99pedro.github.io/SpaceTime" background={ImagesExports.ReactProject}></WorkItens>
                    <WorkItens title="Eccomerce React" techs="React,ContexApi,Css" subtitle="Landing Page de um Eccomerce, onde ao selecionar a quantidade de produtos, faz a soma e mostra o valor da quantia , multiplicado pelo valor do produto." path="https://dev99pedro.github.io/EccomerceReact" background={ImagesExports.EccomerceProject}></WorkItens>

                    <WorkItens title="Loja de compras" techs="React, Sass, ContexApi" subtitle="Página estilo eccomerce com alguns produtos que são adicionados ao carrinho e soma o valor total dos produtos no final na pagina de compra" path="https://projeto-eccomerce-att.vercel.app/" background={ImagesExports.Loja}></WorkItens>
                </WorkDiv>
                <WorkDiv>
                    <WorkItens title="Churrascometro" techs="Html,Css,Javascript" subtitle="Sistema para calcular a quantidade de comida e bebida necessária para um churrasco." path="https://dev99pedro.github.io/Churrascometro-/" background={ImagesExports.Churrascometro}></WorkItens>
                    <WorkItens title="Job Filter" techs="React, Sass" subtitle="Sistema onde é efetuado um filtro de busca de vagas, que pode ser filtrado pelas características e nível de experiência da vaga." path="https://filter-job.vercel.app/" background={ImagesExports.FilterJoB}></WorkItens>
                    <WorkItens title="Github User Search" techs="React,Css" subtitle="Api que retorna dados e repositórios do usuário procurado e é mostrado na tela. É possível acessar os projetos dos repositórios dinamicamente." path="https://dev99pedro.github.io/GithubApiReact/" background={ImagesExports.GitProject}></WorkItens>
                </WorkDiv>
                <WorkGithubButtonText href='https://github.com/dev99pedro' target="_blank">
                    See more on Github
                </WorkGithubButtonText>
            </WorkWrapper>
        </WorkWrapperContainer>

    )
}

export default Work