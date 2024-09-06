import styled from "styled-components";
import { ReactNode } from "react";

const StyledRow = styled.tr`
  background-color: #fff0db;

  &:nth-child(even) {
    background-color: #f8e1c0;
  }

  td {
    text-align: center;
    font-size: 1rem;
    padding: 0.7rem 0.3rem;

    @media (max-width: 768px) {
      font-size: 0.8rem;
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
