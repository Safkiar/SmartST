import styled from "styled-components";
import { ReactNode } from "react";

const StyledLayout = styled.div`
  min-width: 90vw;
  margin-top: 3rem;
  background-color: #892be2e0;
  border-radius: 7px;
  border: 1px solid #ff1493;

  @media (max-width: 768px) {
    min-width: 100vw;
  }
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
