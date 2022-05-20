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
    border: 4px solid #ba196b;
    padding: 50px 120px;
    position: relative;
    overflow: hidden;
    color: #ba196b;
    transition: all 0.5s ease-out;
    text-transform: uppercase;
    font-family: 'Roboto Flex', sans-serif;
    font-weight: 200;
    letter-spacing: -0.05em;


    &:hover {
      font-weight: 900;
      letter-spacing: 0.2em;
      border: 8px solid #ba196b;
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

const Button4: NextPage = () => {

    return <Container>
        <a>
            Hover Me
        </a>

    </Container>
}

export default Button4
