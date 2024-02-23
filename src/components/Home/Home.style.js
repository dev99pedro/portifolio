import styled from "styled-components";


export const HomeWrapper = styled.div`
   line-height: 40px;
   background-color: #000000;
   padding-top: 20vh;
   background-position: center center;
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: center;


   @media(max-width:600px) {
    
    height: 40vh;

   }


   @media(min-width:600px) and (max-width: 900px) {
   
   height: 50vh;

  }
`

export const HomeText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const HomeTitle = styled.h1`
    font-size: 80px;
    color: #ffffff;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 35px;
        width: 300px;
      
    }



    @media (min-width: 600px) and (max-width: 900px)  {
        font-size: 45px;
        width: 500px;
        margin-top: 50px;
        
    }

    @media (min-width: 1000px) and (max-width: 1200px)  {
        font-size: 60px;
   
        
    }

`

export const HomeSubtitle = styled.p`
    font-size: 30px;
    color: #ffffff;
    text-align: center;
    margin: 30px;
    width: 70%;

  

    @media (max-width: 600px) {
        font-size: 18px;
        width: 300px;
        
        
    }



    
    @media (min-width: 600px) and (max-width: 900px) {
        font-size: 25px;
        
        padding: 10px;
        
      
    }

    
    @media (min-width: 1000px) and (max-width: 1200px)  {
        width: 100%;
        font-size: 30px;
        padding-right: 5px;
        padding-left: 5px;
    }
        

`