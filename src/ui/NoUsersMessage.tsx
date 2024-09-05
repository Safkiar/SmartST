import styled from "styled-components";

const MessageContainer = styled.div`
  max-width: 95vw;
  margin-top: 3rem;
  padding: 1.8rem;
  text-align: center;
  background-color: #f13d3dc3;
  border-radius: 7px;
  border: 1px solid #ff1493;
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const NoUsersMessage = () => (
  <MessageContainer> No users found 🚫</MessageContainer>
);

export default NoUsersMessage;
