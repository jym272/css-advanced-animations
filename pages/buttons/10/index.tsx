import type {NextPage} from 'next'
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #292932;

  a {
    font-size: 3.0rem;
    border: none;
    padding: 50px 120px;
    position: relative;
    //overflow: hidden;
    color: #ffffff;
    font-weight: 500;
    background-color: #d4cc10;
    Z-index: 1;
    transition: all 0.3s ease-out;

    &:before {
      content: "Hover Me";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: green;
      transform-origin: top;
      transition: all 0.5s;
      transform: rotateX(270deg);


    }

    &:after {
      content: "Hover Me";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ba161b;
      transform-origin: bottom;
      transition: all 0.5s ease-in-out 0.25s;
      transform: rotateX(270deg);


    }

    &:hover:after {
      transform: rotateX(0deg);

    }


    &:hover:before {
      transform: rotateX(0deg);

    }

    &:hover {
      color: rgb(255, 255, 255);
    }

  }

`;

const Button10: NextPage = () => {

    return <Container>
        <a>
            Hover Me
        </a>

    </Container>
}

export default Button10
