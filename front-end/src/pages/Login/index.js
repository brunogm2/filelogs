import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Buffer} from 'buffer';

import { Container, Animation, Form, ButtonContainer } from "./styles";

import useErrors from '../../hooks/useErrors'; 
import banner from '../../assets/images/banner.svg';
import Input from "../../components/Input";
import Button from "../../components/Button";
import isEmailValid from '../../utils/isEmailValid';
import FormGroup from "../../components/FormGroup";
import api from '../../services/api';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors();

    const isFormValid = (password && errors.length == 0);

    function handleEmailChange(event) {
        setEmail(event.target.value);

        if(event.target.value && !isEmailValid(event.target.value)) {
            setError({ field: 'email', message:'E-mail inválido.'});
        }else {
            removeError('email');
        }
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);

        if(!event.target.value) {
            setError({ field: 'password', message:'Senha é obrigatório.'});
        }else {
            removeError('password');
        }    
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64')
    
        try {
            const response = await api.get("/auth", {
                headers: {
                    'Authorization': `Basic ${token}`
                }
            });

            return window.location.href ='/home'

        } catch (error) {
            alert("Verifique as credenciais e tente novamente!");
        }   
    }
    
    return(
        <Container>
            <Animation>
                <img src={banner} alt="Banner" />
            </Animation>

            <Form onSubmit={handleSubmit}>
                <h1>
                    Seja bem-vindo ao registro de logs!
                </h1>

                <FormGroup error={getErrorMessageByFieldName('email')}>
                    <Input 
                        error={getErrorMessageByFieldName('email')}
                        placeholder="Email * bruno@gmail.com"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </FormGroup>

                <FormGroup error={getErrorMessageByFieldName('password')}>
                    <Input 
                        error={getErrorMessageByFieldName('password')}
                        placeholder="Password * 123456"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </FormGroup>
                
                <ButtonContainer>
                    <Button type="submit" disabled={!isFormValid}>
                        Sing In
                    </Button>
                </ButtonContainer>
            </Form>
        </Container>
    )
}