import styled from "styled-components";

export const SkillsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #000000;
`

export const SkillsTitle = styled.h1`

    color: #ffffff;
    margin-bottom: 60px;
    margin-top: 120px;

    h2{ 
        margin-top: 30px;
        font-size: 60px;
    }

    @media (max-width: 600px) {
        font-size: 40px;
        text-align: center;


        h1 { 
        font-size: 40px;
        text-align: center;

        }
    }

`

export const SkillsCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    width: 1170px;
    
    @media (max-width: 700px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: unset;
    }

    @media (min-width: 700px) and (max-width: 1200px) {
        width: 600px;
    }

`



export const CardWrapperContainer = styled.div`

    background-color: #58287F;
    width: 270px;
    align-items: center;
    display: flex;
    border-radius:3px;
    border: none;
    
    padding-left: 10px;

    

    @media (max-width: 600px) {
        width: 280px;
    }


`


export const CardWrapper = styled.div`
    
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 20px;



`


export const CardIcon = styled.img`
    width: 30px;
    height: auto;

`


export const CardText = styled.h2`
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
`

export const CardInfos = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 25px;
  

`



export const CardInfosText = styled.li`
    font-size: 16px;
    color: #ffffff;
    margin-top: 20px;
   

`

export const CardWrapperInfosIcons = styled.div`
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 50px;

`

