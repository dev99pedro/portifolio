import { ExperienceLogo,ExperienceCardUl ,ExperienceCardText, ExperienceCardList, ExperiencieCardFlex, ExperienceCardContainer, ExperienceContainer, ExperienceTitle, ExperienceCardWrapper, CardWrapperName, CardWrapperData, CardWrapperDataText, CardWrapperIcon } from "./Experience.style"
import ImagesExport from "../ImagesExport/ImagesExport"
import { useState } from "react"

const Experience = () => {



    const exp = [
        { title: 'PMWEB', data: '2021 - Presente', text: 'Desenvolvimento e criação de E-mails. Desenvolvimento de Landing-pages em Html, Css e Javascript', img: ImagesExport.Pmweb },
        { title: 'Infocap Tecnologia da Informação', data: '2020 - 2021', text: 'Desenvolvimento e melhoria de sites, Landing-pages, e Layouts. Criação e ajuste de componentes', img: ImagesExport.Info},
    ]


    const [state, setState] = useState()

    const handleClick = (index) => {
        if (state === index) {
            return setState(null)
        }

        setState(index)
    }

    return (
        <ExperienceContainer id="experience"  style={{ backgroundImage: 'url(https://cdn.discordapp.com/attachments/900504829527490630/1065650705072930826/3_-_copia.png' }}>
            <ExperienceTitle>
                Professional<br />
                Experience
            </ExperienceTitle>
            <ExperienceCardContainer>
                {exp.map((element, index) => {
                    return (
                        <ExperiencieCardFlex style={{ height: state === index ? '180px' : '50px', transition: '0.5s' }} onClick={() => handleClick(index)} key={index}>
                            <ExperienceCardWrapper>
                                <CardWrapperName >
                                    {element.title}
                                </CardWrapperName>
                                <CardWrapperData>
                                    <CardWrapperDataText>
                                        {element.data}
                                    </CardWrapperDataText>
                                    <CardWrapperIcon src={ImagesExport.Add}>

                                    </CardWrapperIcon>
                                </CardWrapperData>
                            </ExperienceCardWrapper>
                            <ExperienceCardList>
                                {state === index ? <ExperienceCardUl>
                                   <ExperienceCardText>
                                        {element.text}
                                   </ExperienceCardText>
                                   <ExperienceLogo src={element.img}>

                                   </ExperienceLogo>
                                </ExperienceCardUl> : null}
                            </ExperienceCardList>
                        </ExperiencieCardFlex>
                    )
                })}
            </ExperienceCardContainer>
        </ExperienceContainer>
    )
}

export default Experience