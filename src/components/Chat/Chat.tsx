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
        <svg viewBox="0 0 16 16" fill="#54656f" height="25px" width="25px">
          <path
            fillRule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
          />
        </svg>
        <svg viewBox="0 0 24 24" fill="#54656f" height="25px" width="25px">
          <path d="M20.12 11.95l-6.58 6.59a5 5 0 11-7.08-7.07l6.59-6.6a3 3 0 014.24 4.25l-6.58 6.59a1 1 0 11-1.42-1.42l6.59-6.58a1 1 0 00-1.42-1.42l-6.58 6.59a3 3 0 004.24 4.24l6.59-6.58a5 5 0 00-7.08-7.08l-6.58 6.6a7 7 0 009.9 9.9l6.59-6.6a1 1 0 00-1.42-1.4z" />
        </svg>
        <MessageInput placeholder="Type a message" />
        <svg viewBox="0 0 24 24" fill="#54656f" height="25px" width="25px">
          <path d="M12 16c2.206 0 4-1.794 4-4V6c0-2.217-1.785-4.021-3.979-4.021a.933.933 0 00-.209.025A4.006 4.006 0 008 6v6c0 2.206 1.794 4 4 4z" />
          <path d="M11 19.931V22h2v-2.069c3.939-.495 7-3.858 7-7.931h-2c0 3.309-2.691 6-6 6s-6-2.691-6-6H4c0 4.072 3.061 7.436 7 7.931z" />
        </svg>
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
  align-items: center;
  gap: 15px;
  position: absolute;
  bottom: 0;
  padding: 10px 15px;
  width: 100%;
  background-color: #f0f2f5;

  > svg {
    cursor: pointer;
  }
`;

const MessageInput = styled.input`
  font-size: 15px;
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  width: 100%;
`;
