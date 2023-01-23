import React, { useState } from "react"
import { NavBarLinksLogoHref, NavBarLinksLogo, NavBarContainer, NavBarLogo, NavBarLinks, Logo, Links, HamburguerButton, NavBarLinksMobile, LinksMobile, NavBarSecond } from "./Navbar.style"

import LogoMobile from '../img/logo-mobile.png'
import CloseMobile from '../img/close-mobile.png'
import ImagesExports from "../ImagesExport/ImagesExport"

const Navbar = () => {

    const [closeMenu, setCloseMenu] = useState(false)
    











    return (



        <NavBarContainer any={closeMenu} >
            <NavBarSecond>
                <NavBarLogo>
                    <Logo src='' ></Logo>
                </NavBarLogo>
                <NavBarLinks>
                    <Links to="skills" spy={true} smooth={true} offset={100} duration={500}>Skills</Links>
                    <Links to="works" spy={true} smooth={true} offset={100} duration={500}>Works</Links>
                    <Links to="experience" spy={true} smooth={true} offset={100} duration={500}>Experiencie</Links>
                    <Links to="contact" spy={true} smooth={true} offset={100} duration={500}>Contact</Links>
                    <NavBarLinksLogoHref href='https://github.com/dev99pedro' target="_blank">
                        <NavBarLinksLogo style={{ marginLeft: '20px' }} src={ImagesExports.LogoGitNav}></NavBarLinksLogo>
                    </NavBarLinksLogoHref>
                    <NavBarLinksLogoHref href='https://www.linkedin.com/in/pedro-ascari-85245a204/' target="_blank">
                        <NavBarLinksLogo src={ImagesExports.LogoLinkedinNav}></NavBarLinksLogo>
                    </NavBarLinksLogoHref>

                    <NavBarLinksLogoHref href='https://web.whatsapp.com/send?phone=5551995970289' target="_blank">
                        <NavBarLinksLogo src={ImagesExports.Whats}></NavBarLinksLogo>
                    </NavBarLinksLogoHref>
                </NavBarLinks>

                {closeMenu ? <HamburguerButton onClick={() => setCloseMenu(props => !props)} src={CloseMobile}></HamburguerButton> :
                    <HamburguerButton onClick={() => setCloseMenu(props => !props)} src={LogoMobile}></HamburguerButton>
                }
            </NavBarSecond>

            {closeMenu &&
                <NavBarLinksMobile >
                    <LinksMobile onClick={() => setCloseMenu(false)}>Home</LinksMobile>
                    <LinksMobile to="skills" spy={true} smooth={true} offset={100} duration={500} onClick={() => setCloseMenu(false)} >Skills</LinksMobile>
                    <LinksMobile to="works" spy={true} smooth={true} offset={100} duration={500} onClick={() => setCloseMenu(false)}>Works</LinksMobile>
                    <LinksMobile to="works" spy={true} smooth={true} offset={100} duration={500} onClick={() => setCloseMenu(false)}>Experiencie</LinksMobile>
                    <LinksMobile to="experience" spy={true} smooth={true} offset={100} duration={500} onClick={() => setCloseMenu(false)}>Contact</LinksMobile>
                </NavBarLinksMobile>

            }
        </NavBarContainer >

    )
}

export default Navbar