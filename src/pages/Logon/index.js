import React from 'react';

import { FiLogIn } from 'react-icons/fi';

import { Container, SectionForm, Form, Button } from './styles';

import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon() {
  return (
    <Container>
      <SectionForm>
        <img src={logo} alt="Be The Hero" />
        <Form>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" />
          <Button type="submit">Entrar</Button>
          <a href="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </a>
        </Form>
      </SectionForm>
      <img src={heroesImg} alt="heroes" />
    </Container>
  );
}
