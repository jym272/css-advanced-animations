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
    color: whitesmoke;
    transition: all 0.3s ease-out;

    &:before {
      content: "";
      position: absolute;
      //right: 0;
      //top: 0;
      background-color: white;
      width: 100%;
      height: 30%;
      //transform-origin:  right;
      transform:  translateX(48%) rotateZ(45deg);
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      //z-index: -1;

    }

    &:hover:before {
      transform: translateX(-102%) rotateZ(45deg);
    } 

    &:hover {
      background-color: brown;
    }

  }

 


`;

const Button6: NextPage = () => {

    return <Container>
        <a>
            Hover Me
        </a>

    </Container>
}

export default Button6
