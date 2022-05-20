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

  perspective: 1000px;


  a {
    font-size: 3.0rem;
    border: 4px solid #262626;
    padding: 50px 120px;
    position: relative;
    overflow: hidden;
    color: #262626;
    background-color: white;
    perspective: 1000px;
    Z-index: -51;
    transition: all 0.3s ease-out;

    &:before {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      content: "Hover Me";
      display: flex;
      align-items: center;
      justify-content: center;
      transform: scale3d(3.5, 3.5, 1);
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      background-color:#262626;
      color: rgb(255, 255, 255);
      opacity: 0;
      z-index: -2;
    }

    &:hover:before {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }

    &:hover {
      color: rgba(15, 1, 1, 0);
    }

  }




`;

const Button8: NextPage = () => {

    return <Container>
        <a>
            Hover Me
        </a>

    </Container>
}

export default Button8
