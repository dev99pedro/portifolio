import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    flex-direction: column;
    padding-top: 100px;
    padding-bottom: 100px;

`

export const ContactText = styled.h1`
    font-size: 50px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 20px;

    @media (max-width: 600px) {
        font-size: 20px;
    }

    @media (min-width: 600px) and (max-width: 900px) {
       font-size: 40px;
    }
`

export const ContactSubtitle = styled.h2`
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 20px;

    @media(max-width: 600px) {
        font-size: 15px;
    }

`


export const ContactSocial = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

`

export const ContactSocialImgLink = styled.a `
    text-decoration: none;
    

`

export const ContactSocialImg = styled.img `
    cursor: pointer;
    height: auto;
    width: 70px;

    @media (max-width: 600px) {
        width: 40px;
    }

    @media (min-width: 600px) and (max-width: 900px) {
        width: 60px;
    }
`