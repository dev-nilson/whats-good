import { Avatar } from "antd";
import styled from "styled-components";

export default function Chat() {
  return (
    <Container>
      <Header>
        <User>
          <Avatar size="large">JD</Avatar>
          <span>John Doe</span>
        </User>
        <IconsContainer>
          <svg
            viewBox="0 0 788.5 1000"
            fill="#54656f"
            height="20px"
            width="20px"
          >
            <path d="M772 772c20 22.667 22 43.333 6 62l-46 46c-24 21.333-46.667 21.333-68 0L474 690c-49.333 28-101.333 42-156 42-85.333 0-159.667-31.667-223-95S0 499.333 0 414s30-158.333 90-219 132.667-91 218-91 160 31.667 224 95 96 137.667 96 223c0 58.667-15.333 112.667-46 162l190 188M94 414c0 58.667 22.667 110.667 68 156s97.333 68 156 68 109-21 151-63 63-93 63-153c0-58.667-22.667-110.333-68-155s-97.333-67-156-67-109 21-151 63-63 92.333-63 151" />
          </svg>
          <svg fill="#54656f" viewBox="0 0 16 16" height="20px" width="20px">
            <path d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          </svg>
        </IconsContainer>
      </Header>
      <MessageBox>
        <MessageInput placeholder="Type a message" />
      </MessageBox>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  background-color: #efeae2;
  position: relative;
`;

const Header = styled.div`
  background-color: #f0f2f5;
  display: flex;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #e9edef;
  border-left: 1px solid #d1d7db;
`;

const User = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 25px;

  > svg {
    cursor: pointer;
  }
`;

const MessageBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  padding: 10px 15px;
  width: 100%;
  background-color: #f0f2f5;
`;

const MessageInput = styled.input`
 
  font-size: 15px;
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  width: 100%;
`;
