import React, { useState } from "react"
import { HomeWrapper, HomeText, HomeTitle, HomeSubtitle } from "./Home.style"




const Home = () => {

    const [width, setWidth] = useState()

    return (
        <HomeWrapper any={width} style={{ backgroundImage: 'url(https://cdn.discordapp.com/attachments/900504829527490630/1065650790468964452/IMG_6697_-_copia.JPG)' }}>
            <HomeText>
                <HomeTitle>
                Full Stack Developer
                </HomeTitle>
                <HomeSubtitle>
                Software developer since 2021, with experience in developing applications using
                React, focused on implementing features and integrations. Currently
                specializing in Ruby on Rails
                </HomeSubtitle>
            </HomeText>
        </HomeWrapper>

    )
}

export default Home