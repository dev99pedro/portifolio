import { useState } from 'react'
import { WorkItensContainer, WorkItensText, WorkItensTitle, WorkItensSubtitle, WorkItensButton, WorkItensButtonText, WorkItensTechs, ButtonLink } from './WorkItens.styled'

const WorkItens = ({ title, background, subtitle, techs, path }) => {

    const [hover, setHover] = useState(false)



    return (

        <WorkItensContainer change={hover} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ backgroundImage: hover ? null : `url(${background})` }}>

            <WorkItensText>
                <WorkItensTitle  >
                    {hover ? <h3>{title}</h3> : null}
                </WorkItensTitle>
                <WorkItensSubtitle>
                    {hover ? <p>{subtitle}</p> : null}
                </WorkItensSubtitle>
                <WorkItensTechs>
                    {hover ? <p>{techs}</p> : null}
                </WorkItensTechs>
                {hover ?
                    <WorkItensButtonText>
                        <ButtonLink href={path} target="_blank">Visit website</ButtonLink>
                    </WorkItensButtonText>
                    : null}
            </WorkItensText>
        </WorkItensContainer>

    )
}

export default WorkItens