import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin: 0 auto;
  margin-top: 5rem;
  padding: 1rem;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 4px solid #cfd8dc;
  border-top-color: #3f51b5;
  animation: ${spin} 0.8s infinite ease-in-out;
  z-index: 200;
`;

export default Spinner;
