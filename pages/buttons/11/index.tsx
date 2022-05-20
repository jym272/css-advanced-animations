import type {NextPage} from 'next'
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #31313b;

  a {
    font-size: 3.0rem;
    border: 4px solid #d4cc10;
    padding: 50px 120px;
    position: relative;
    //overflow: hidden;
    color: transparent;
    font-weight: 500;
    background-color: rgba(24, 24, 1, 0);
    Z-index: 1;
    transition: all 0.3s ease-out;

    &:before {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #d4cc10;
      content: "Hover Me";
      position: absolute;
      background-color: #181801;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: all 0.5s ease-in-out;

    }

    &:hover:before {
      left: 100%;
      transform: scale(0.0) rotateY(360deg);
      opacity: 0;

    }

    &:after {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #d4cc10;
      content: "Hover Me";
      position: absolute;
      background-color: #181801;
      top: 0;
      width: 100%;
      height: 100%;
      transition: all 0.5s ease-in-out;
      transform: scale(0) rotateY(360deg);
      right: 100%;
      opacity: 1;
    }

    &:hover:after {
      right: 0;
      transform: scale(1) rotateY(0);


    }


    &:hover {

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
