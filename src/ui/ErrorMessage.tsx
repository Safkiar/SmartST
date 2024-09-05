import styled from "styled-components";

const ErrorContainer = styled.div`
  max-width: 95vw;
  margin-top: 3rem;
  padding: 2rem;
  text-align: center;
  background-color: #ff1744;
  border-radius: 7px;
  border: 1px solid #fe071c;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const ErrorMessage = ({ error }: { error: string }) => (
  <ErrorContainer>⚠️ Error: {error}</ErrorContainer>
);

export default ErrorMessage;
