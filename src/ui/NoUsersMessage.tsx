import styled from "styled-components";

const MessageContainer = styled.div`
  max-width: 95vw;
  margin-top: 3rem;
  padding: 1.8rem;
  text-align: center;
  background-color: #911f1fc3;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  color: black;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const NoUsersMessage = () => (
  <MessageContainer> No users found 🚫</MessageContainer>
);

export default NoUsersMessage;
