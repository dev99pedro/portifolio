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
                    Sou desenvolvedor de software desde 2021, atualmente estou com foco total em
                    React e Node, onde estudo princípios de desenvolvimento de código escalável
                    como SOLID, Clean Architecture e TDD
                </HomeSubtitle>
            </HomeText>
        </HomeWrapper>

    )
}

export default Home