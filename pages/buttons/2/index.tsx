import type {NextPage} from 'next'
import styled from "styled-components";

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
    border: 4px solid #5d2693;
    padding: 50px 120px;
    position: relative;
    overflow: hidden;
    color: #5d2693;
    transition: color 0.5s ease-out;

    &:before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      background-color: #5d2693;
      width: 100%;
      height: 100%;
      transform-origin: top left;
      transform: translateX(-100%);
      transition: all 0.8s ease-in-out;
      z-index: -1;

    }

    &:hover:before {
      color: white;
      transform: translateX(0%);
    }

    &:hover {
      color: white;
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

const Button2: NextPage = () => {

    return <Container>
        <a>
            Hover Me
        </a>

    </Container>
}

export default Button2
