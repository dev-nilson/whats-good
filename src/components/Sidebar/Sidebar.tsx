import styled from "styled-components";
import { Avatar } from "antd";

export default function Sidebar() {
  return (
    <Container>
      <Header>
        <Avatar size="large">DL</Avatar>
        <IconsContainer>
          <svg viewBox="0 0 640 512" fill="#54656f" height="20px" width="20px">
            <path d="M352 128c0 70.7-57.3 128-128 128S96 198.7 96 128 153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8 2.4-.1 4.7-.2 7.1-.2h61.4c89.1 0 161.3 72.2 161.3 161.3 0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9 19.7-26.6 31.3-59.5 31.3-95.1 0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
          </svg>
          <svg fill="#54656f" viewBox="0 0 16 16" height="20px" width="20px">
            <path d="M0 2a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4.414a1 1 0 00-.707.293L.854 15.146A.5.5 0 010 14.793V2zm5 4a1 1 0 10-2 0 1 1 0 002 0zm4 0a1 1 0 10-2 0 1 1 0 002 0zm3 1a1 1 0 100-2 1 1 0 000 2z" />
          </svg>
          <svg fill="#54656f" viewBox="0 0 16 16" height="20px" width="20px">
            <path d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          </svg>
        </IconsContainer>
      </Header>
    </Container>
  );
}

const Container = styled.div`
  width: 350px;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 25px;
`;

const Header = styled.div`
  background-color: #f0f2f5;
  display: flex;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

