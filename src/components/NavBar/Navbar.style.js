import styled from 'styled-components'
import { Link } from "react-scroll"



export const NavBarSecond = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    align-items: center;
    height: 80px;
    @media (max-width: 700px) {
        justify-content: space-between;
    }

`

export const NavBarContainer = styled.div`
  background-color: #3D3C42;
  /* position: fixed;
  width: 100%; */
  height: ${props => props.any ? '100vh' : '80px'};
  align-items: center;
    @media(min-width: 700px) {
        
        height: 80px;
    }


    @media (max-width: 700px) {
        height: ${props => props.clickLink ? '80px' : null}
    }


`

export const NavBarLogo = styled.div`
    display: flex;

`

export const NavBarLinks = styled.div`
    margin: auto;
    display: flex;
    align-items: center;


    @media (max-width: 700px) {
        margin: unset;
        display: none;
    }


`


export const Logo = styled.img`
    width: 30px;
    height: auto;

`

export const Links = styled(Link)`
  cursor: pointer;
  color: #ffffff;
  font-size: 20px;
  font-weight: 100;
  overflow: hidden;
  padding: 1rem 2rem;
  position: relative;
  text-decoration: none;
  transition: .2s transform ease-in-out;
  will-change: transform;
  z-index: 0;


  &:after{ 
    background-color: #58287F;
    border-radius: 3rem;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position :absolute;
    left: 0;
    top: 0;
    transform: translate(-100%, 0) rotate(10deg);
    transform-origin: top left;
    transition: .2s transform ease-out;
    will-change: transform;
    z-index: -1;}


    &:hover:after{ 
    transform: translate(0, 0)}
    
  &:hover{
    border: 2px solid transparent;
    color: #ffffff;
    transform: scale(1.05);
    will-change :transform};
    


    @media (max-width: 700px) {
        display: none;
    }
`

export const HamburguerButton = styled.img`
    width: 50px;
    height: auto;
    cursor: pointer;
    padding-right: 10px;


    @media (min-width: 700px) {
        display: none;
    }
`


export const LinksMobile = styled(Link)`
    font-size: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    color: #ffffff;
    cursor: pointer;

    &:hover { 
        color: #58287F
    }
    


    @media (min-width: 700px) {
        display: none;

    }
    
`

export const NavBarLinksMobile = styled.div`
  
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;


`


export const NavBarLinksLogo = styled.img`
    margin-left: 20px;
    margin: 10px;
    width: 30px;
    height: auto;
    cursor: pointer;

    &:hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    @media (min-width: 700px) and (max-width: 750px) {
        margin-left: 3px !important;
    }
`

export const NavBarLinksLogoHref = styled.a`
    text-decoration: none;

`