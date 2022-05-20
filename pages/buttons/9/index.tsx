import type {NextPage} from 'next'
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #b6bef0;

  a {
    font-size: 3.0rem;
    border: 4px solid salmon;
    padding: 50px 120px;
    position: relative;
    overflow: hidden;
    color: salmon;
    background-color: white;
    Z-index: 1;
    transition: all 0.3s ease-out;

    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: -50%;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: salmon;
      border-radius: 100%;
      transform: scaleY(0);
      transition: all 0.3s ease-out;

    }

    &:hover:before {
      transform: scaleY(2.01);
      border-radius: 0%;

    }

    &:hover {
      color: rgb(255, 255, 255);
    }

  }

`;

const Button9: NextPage = () => {

    return <Container>
        <a>
            Hover Me
        </a>

    </Container>
}

export default Button9
