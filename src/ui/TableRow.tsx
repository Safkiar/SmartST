import styled from "styled-components";
import { ReactNode } from "react";

const StyledRow = styled.tr`
  background-color: #000000b9;
  border-bottom: 1px solid grey;

  td {
    text-align: center;
    font-size: 1.1rem;
    padding: 0.3rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      padding: 0.2rem;
    }
  }
`;

interface RowProps {
  children: ReactNode;
}

const Row: React.FC<RowProps> = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

export default Row;
