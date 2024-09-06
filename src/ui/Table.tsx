import styled from "styled-components";
import { ReactNode } from "react";

const StyledTable = styled.table`
  font-size: 1.4rem;
  min-width: 100%;
  overflow: hidden;
  background-color: #ffffffef;
  border-collapse: collapse;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 576px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

interface TableProps {
  children: ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};

export default Table;
