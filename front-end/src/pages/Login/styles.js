import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: row;
    height: 500px;
`;

export const Animation = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 32px;
    /* background-color: #fff; */
    
    >img {
        width: 580px;
        height: 580px;
    }

`;

export const Form = styled.form`
    width: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: green; */
    margin-left: 32px;

    >h1{
        padding: 0px 0px 16px 16px;
        color: #0A2541;
    }
`;


export const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 24px;
    padding: 0 16px;
   
    button {
        width: 100%;
    }
`;