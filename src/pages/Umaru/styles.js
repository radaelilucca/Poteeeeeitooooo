import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 50%;
  animation: blink 1s infinite;

  @keyframes blink {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
`;

export const SectionForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  margin: 30px;

  img {
    height: 200px;
    width: 500px;
  }
`;

export const Form = styled.form`
  margin-top: 100px;
  width: 400px;

  h1 {
    font-size: 21px;
    margin-bottom: 32px;
    text-align: center;
    color: #41414d;
  }

  a {
    font-size: 18px;
    font-weight: 500;
    color: #41414d;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-top: 40px;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.7;
    }
  }

  svg {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #f00d7d;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;
