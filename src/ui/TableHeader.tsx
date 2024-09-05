import styled from "styled-components";
import { ReactNode } from "react";

const StyledHeader = styled.tr`
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;

  th {
    width: 25%;
    padding: 0.6rem;
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 576px) {
      padding: 0.4rem;
      font-size: 0.9rem;
    }
  }
`;

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
