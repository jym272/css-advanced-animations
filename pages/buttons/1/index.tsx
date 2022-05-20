import type {NextPage} from 'next'
import styled from "styled-components";

const ButtonStyled = styled.button`
  height: 90px;
  width: 190px;
  background-color: #09293b;
  transition-property: background-color;
  transition-duration: 1.5s;
  color: white;
  font-size: 2.0rem;
  border: none;
  border-radius: 0px;

  transition: background-color 1.0s ease-in-out,
  color 1.5s ease-in-out 1s, border-radius 1.5s ease-in-out 1s;

  &:hover {
    background-color: #1a92d0;
    color: black;
    border-radius: 30px;
  }

`;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  perspective: 1000px;


  a {
    font-size: 3.0rem;
    border: 4px solid #063953;
    padding: 50px 120px;
    position: relative;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 232, 76, 0.91);
      width: 110%;
      height: 100%;
      transform-origin: bottom right;
      transform: rotateZ(90deg);
      transition: transform 0.8s ease-in-out;
      z-index: -1;

    }

    &:hover:before {
      transform: rotateZ(0deg);
    }

  }

  img {
    width: 200px;
    display: block;
    margin: 100px auto 0;
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: rotateY(60deg);
    }
  }

  img:last-of-type {
    transform-origin: 5% 90%;
  }


`;

const Button1: NextPage = () => {

    return <Container>
        <a>
            Hover Me
        </a>

    </Container>
}

export default Button1
