import styled from "styled-components";



export const ExperienceContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #000000;
    padding-bottom: 100px;
    padding-top: 100px;



  

`




export const ExperienceTitle = styled.h1`
    
    color: #ffffff;
    text-align: center;

    @media(max-width: 600px) {
        font-size: 40px;
        text-align: center;
    }

`

export const ExperienceCardContainer = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;

`



export const CardWrapperName = styled.h3`
    text-transform: uppercase;
    font-size: 18px;
    color: #ffffff;
    padding-left: 20px;

    @media (max-width:600px) {
        font-size: 14px;
        padding-left: 10px;
        
    }
`

export const CardWrapperData = styled.div`
    display: flex;
    font-size: 15px;
    padding-right: 20px;
    align-items: center;
    gap: 20px;

`


export const CardWrapperDataText = styled(CardWrapperName)`


`

export const CardWrapperIcon = styled.img`

    width: 30px;
    height: auto;

    @media(max-width:600px) {
        width: 18px;
    }
`


export const ExperiencieCardFlex = styled.div`
    display: flex;
    background-color: #58287F;
    flex-direction: column;
    width: 800px;
    height: 60px;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 20px;
    align-items: flex-start;
    justify-content: center;
    &:hover {
        background-color: #000000;
    }

    @media(max-width: 600px) {
        width: 350px;
        height: 30px;
    }

    @media(min-width: 600px) and (max-width: 1200px) {
        width: 600px;

    }

`

export const ExperienceCardList = styled.div`
    display: flex;
    flex-direction: column;
 
    

`
export const ExperienceCardUl = styled.ul`
    display: flex;
    justify-content: space-between;
    line-height: 25px;
    align-items: center;
    padding-right: 20px;
    padding-left: 20px;
    margin-top: 20px;

`

export const ExperienceCardText = styled.li`
    font-size: 20px;
    list-style: none;
    color:#ffffff ; 
    margin-top: 5px; 
    width: 70%;


    @media(max-width: 600px) {
        font-size: 14px;
        line-height: 18px;


    }

    

`

export const ExperienceCardWrapper = styled.div`
    display: flex  ;
    justify-content: space-between;
    width: 100%;
    align-items: center;

`

export const ExperienceLogo = styled.img`
    width: 50px;
    height: auto;

    @media(max-width:600px) {
        width: 30px;
    }

`