import styled from "styled-components";
import { ReactNode } from "react";

const StyledSearchCaption = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    font-size: 1.3rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.1rem;
    }
  }
`;

interface SearchCaptionProps {
  children: ReactNode;
}

const SearchCaption: React.FC<SearchCaptionProps> = ({ children }) => {
  return <StyledSearchCaption>{children}</StyledSearchCaption>;
};

export default SearchCaption;
