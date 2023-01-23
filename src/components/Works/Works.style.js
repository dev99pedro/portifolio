import styled from "styled-components";


export const WorkWrapperContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    
`

export const WorkWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`

export const WorkTitle = styled.h1`
    margin-bottom: 50px;
    margin-top: 120px;
    color: #ffffff;

    @media(max-width: 600px) {
        font-size: 40px;
        text-align: center;
    }

`

export const WorkDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 35px;
    margin-bottom: 30px;


    @media(max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }



`



export const WorkGithubButtonText = styled.a`
    border: 2px solid #58287F;
    font-size: 28px;
    color: #ffffff;
    cursor: pointer;
    margin-top: 70px;
    margin-bottom: 70px;
    width: 350px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    &:hover {
        background-color: #58287F;
    }

    @media (max-width: 600px) {
        width: 300px;
        font-size: 25px;
    }

`