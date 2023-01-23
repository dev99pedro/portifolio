import React, { useState } from "react"
import { HomeWrapper, HomeText, HomeTitle, HomeSubtitle } from "./Home.style"




const Home = () => {

    const [width, setWidth] = useState()
    
    return (
        <HomeWrapper any={width} style={{ backgroundImage: 'url(https://cdn.discordapp.com/attachments/900504829527490630/1065650790468964452/IMG_6697_-_copia.JPG)' }}>
            <HomeText>
                <HomeTitle>
                    Desenvolvedor Front-end
                </HomeTitle>
                <HomeSubtitle>
                    Amante da área de desenvolvimento web. Sou um desenvolvedor Front-end apaixonado pelo que faz, sempre em busca de novos conhecimentos e experiências.
                </HomeSubtitle>
            </HomeText>
        </HomeWrapper>

    )
}

export default Home