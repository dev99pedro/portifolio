import styled from "styled-components";


export const WorkItensContainer = styled.div`
    background-size: contain;
    width: 450px;
    background-repeat: no-repeat;
    height: 250px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    

    border: ${props => props.change ? '3px solid #ffffff' : null};
    cursor: pointer;

    @media(max-width: 600px) {
        width: 320px;
        height: 300px;
        background-position: center;
    
    }

    @media (min-width:1200px) and (max-width: 1500px) {
        width: 375px;
    }

`
export const WorkItensText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const WorkItensTitle = styled.h3`


    h3{ 
        padding-top: 10px;
        color: #ffffff;
        font-size: 20px;
        font-weight: 300;
    }


`
export const WorkItensSubtitle = styled.p`
   font-size: 16px;
   color: #C0C0C0;
   text-align: center;
   line-height: 19px;
   padding: 10px;

   @media(max-width: 600px) {
    font-size: 15px;
   }
`

export const WorkItensButton = styled.button`
    background: none;
    border: 2px solid purple;
    border-radius: 18px;
    font-size: 25px;
    display: flex;
    width: 130px;
    height: 40px;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: #89CFF0
    }

  

`

export const WorkItensButtonText = styled.p`
    
    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
`

export const WorkItensTechs = styled.span`

    font-size: 13px;
    color: #58287F;
    font-style: italic;
    margin-top: 10px;
    padding-bottom: 20px;
    


    

`


export const ButtonLink = styled.a`
    text-decoration: none;
    background: none;
    border: 2px solid #ffffff;
    border-radius: 14px;
    color: #ffffff;
    display: flex;
    width: 130px;
    height: 40px;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: #58287F;
    }

   

`