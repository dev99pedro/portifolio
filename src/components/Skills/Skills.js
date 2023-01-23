import React, { useState } from "react"
import { SkillsWrapper, SkillsTitle, SkillsCardWrapper, CardWrapperContainer, CardWrapperInfosIcons, CardWrapper, CardInfos, CardInfosText, CardIcon, CardText } from './Skills.style'
import ImagesExport from "../ImagesExport/ImagesExport"



const Skills = () => {





    const data = [
        { title: 'React', img: ImagesExport.React, stacks: 'ReactComponent, NextsJs' },
        { title: 'Javascript', img: ImagesExport.Js, stacks: 'BLA BLA' },
        { title: 'Css', img: ImagesExport.Css, stacks: 'Blo lo ' },
        { title: 'Sass', img: ImagesExport.Sass, stacks: 'react component' },
        { title: 'Bootstrap', img: ImagesExport.Boot, stacks: 'react component' },
        { title: 'Jquery', img: ImagesExport.Jquery, stacks: 'Blo lo ' },
        { title: 'Wordpress', img: ImagesExport.Wordpress, stacks: 'react component' },
        { title: 'Styled-Components', img: ImagesExport.StyledComp, stacks: 'react component' },
    ]

    const dataExtra = [
        { title: 'Git', img: ImagesExport.Git, stacks: 'ReactComponent, NextsJs' },
        { title: 'Amazon S3', img: ImagesExport.Amazon, stacks: 'Blo lo ' },
        { title: 'Photoshop', img: ImagesExport.Psd, stacks: 'BLA BLA' },
        { title: 'Figma', img: ImagesExport.Figma, stacks: 'react component' },
    ]


    return (
        <SkillsWrapper id="skills">
            <SkillsTitle >
                Skills & Tecnhologys
            </SkillsTitle>
            <SkillsCardWrapper>
                {data.map((element, index) => {
                    return (
                        <CardWrapperContainer>
                            <CardWrapperInfosIcons >
                                <CardWrapper>
                                    <CardIcon src={element.img}>
                                    </CardIcon>
                                    <CardText>
                                        {element.title}
                                    </CardText>
                                </CardWrapper>
                            </CardWrapperInfosIcons>
                        </CardWrapperContainer>
                    )
                })}
            </SkillsCardWrapper>


            <SkillsTitle>
                <h1>Extra skills</h1>
            </SkillsTitle>
            <SkillsCardWrapper>
                {dataExtra.map((element, index) => {
                    return (
                        <CardWrapperContainer style={{ width: '200px', background: '#58287F' }} key={index}>
                            <CardWrapperInfosIcons >
                                <CardWrapper>
                                    <CardIcon src={element.img}>
                                    </CardIcon>
                                    <CardText>
                                        {element.title}
                                    </CardText>
                                </CardWrapper>

                            </CardWrapperInfosIcons>
                        </CardWrapperContainer>
                    )
                })}
            </SkillsCardWrapper>
        </SkillsWrapper>
    )
}


export default Skills