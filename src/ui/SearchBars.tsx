import styled from "styled-components";
import { ReactNode } from "react";

const StyledBars = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;

  input {
    width: 20%;
    padding: 0.5rem 0.9rem;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    input {
      width: 80%;
    }
  }
  @media (max-width: 428px) {
    input {
      width: 60%;
      font-size: 0.9rem;
    }
  }
`;

interface BarProps {
  children: ReactNode;
}

const Bar: React.FC<BarProps> = ({ children }) => {
  return <StyledBars>{children}</StyledBars>;
};

export default Bar;
