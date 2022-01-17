import { useState, useEffect, useMemo } from 'react';
import { Link } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Loader from "../../components/Loader";

import FormatDate from '../../utils/formatDate';
import api from '../../services/api';

import { Container, HeaderForm, ListLogs, ButtonContainer } from "./styles";

export default function Home() {

    const [typeLog, setTypeLog] = useState('');

    const [dataLogs, setDataLogs] = useState([]);
    const [loader, setLoader] = useState(false);

    const filteredLogs = useMemo(() => dataLogs.filter((logs) => (
        logs.logs.toLowerCase().includes(typeLog.toLowerCase())
    )), [dataLogs, typeLog]);

    useEffect(() => {
        initialData();
    }, []);

    async function initialData() {
        const response = await api.get("/logs");

        setDataLogs(response.data);
    }

    function handleTypeLogChange(event) {
        setTypeLog(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setLoader(true);

        try {
            const response = await api.post("/searchlogs");
            setLoader(false);

            return window.location.href ='/home'

        } catch (error) {
            setLoader(false);

            alert("Verifique sua conexão!");
        } 
        
    }

    return(
        <Container>
            {loader == true && (
                <Loader />
            )}
           <HeaderForm onSubmit={handleSubmit}>
               <Input 
                    placeholder="Filtrar por corpo da mensagem ou data | ex: 'Nov 30' | 'CRON[22087]'"
                    value={typeLog}
                    onChange={handleTypeLogChange}
                />

                <ButtonContainer>
                    <Button type="submit">
                        Simular arquivo de log.
                    </Button>
                    <p>
                        Este botão tem como finalidade a simulação de um arquivo de log vindo de um servidor 
                        ou até mesmo podemos imaginar um cenário de upload para leitura. 
                    </p>
                    <p style={{color: '#FC5850'}}>
                        A cada clique será implementado mais 2000 logs!
                    </p>
                    <p style={{color: '#FC5850'}}>
                        Esse processo poderar demorar entre 1 a 3 minuto dependendo do arquivo!
                    </p>
                </ButtonContainer>

           </HeaderForm>

            <ListLogs>
                {filteredLogs.map((logs) => (
                    <p>
                       {logs.logs}
                    </p>
                ))}
            </ListLogs>

        </Container>
    )
}