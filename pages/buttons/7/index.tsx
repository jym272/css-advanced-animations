import type {NextPage} from 'next'
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1f69a3;

  perspective: 1000px;


  a {
    font-size: 3.0rem;
    border: 4px solid whitesmoke;
    padding: 50px 120px;
    position: relative;
    overflow: hidden;
    color: transparent;
    background-color: cornflowerblue;

    &:before {
      display: flex;
      align-items: center;
      justify-content: center;
      content: "Hover Me";
      position: absolute;
      background-color: chocolate;
      color: rgb(245, 245, 245);
      top: 0;
      left: 0;
      z-index: 32;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-out;


    }

    &:after {
      display: flex;
      align-items: center;
      justify-content: center;
      content: "Hover Me";
      position: absolute;
      background-color: chocolate;
      top: 0;
      color: rgb(245, 245, 245);
      left: 0;
      z-index: 32;
      width: 100%;
      height: 100%;
      transform: translate(-100%, 100%);
      transition: all 0.3s ease-out;

    }

    &:hover:before {
      transform: translate(100%, -100%);
    }

    &:hover:after {
      transform: translate(0%, 0%);
    }


  }




`;

const Button7: NextPage = () => {

    return <Container>
        <a>
            Hover Me
        </a>

    </Container>
}

export default Button7
