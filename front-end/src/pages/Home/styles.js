import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 32px;
`;

export const HeaderForm = styled.form`
    background: #0A2541;
    min-height: 150px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.20);

    .container-date {
        display: flex;
        margin-bottom: 8px;
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
   
    button {
        width: 100%;
    }

    p {
        font-size: 10px;
        margin-top: 8px;
        color: #FFF
    }
`;

export const ListLogs = styled.div`
    background: #FFF;
    margin-top: 32px;
    min-height: 150px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.20);
    padding: 16px;

`;



