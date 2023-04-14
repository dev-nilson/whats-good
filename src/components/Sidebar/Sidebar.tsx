import styled from "styled-components";
import { Avatar } from "antd";

type SidebarProps = {
  openChat: (arg: boolean) => void;
};

export default function Sidebar({ openChat }: SidebarProps) {
  return (
    <Container>
      <Header>
        <Avatar size="large">U</Avatar>
        <IconsContainer>
          <svg viewBox="0 0 640 512" fill="#54656f" height="20px" width="20px">
            <path d="M352 128c0 70.7-57.3 128-128 128S96 198.7 96 128 153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8 2.4-.1 4.7-.2 7.1-.2h61.4c89.1 0 161.3 72.2 161.3 161.3 0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9 19.7-26.6 31.3-59.5 31.3-95.1 0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
          </svg>
          <svg viewBox="0 0 24 24" fill="#54656f" height="20px" width="20px">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 101.865-5.135L8 9H2V3l2.447 2.446A9.98 9.98 0 0112 2zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
          </svg>
          <svg fill="#54656f" viewBox="0 0 16 16" height="20px" width="20px">
            <path d="M0 2a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4.414a1 1 0 00-.707.293L.854 15.146A.5.5 0 010 14.793V2zm5 4a1 1 0 10-2 0 1 1 0 002 0zm4 0a1 1 0 10-2 0 1 1 0 002 0zm3 1a1 1 0 100-2 1 1 0 000 2z" />
          </svg>
          <svg fill="#54656f" viewBox="0 0 16 16" height="20px" width="20px">
            <path d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          </svg>
        </IconsContainer>
      </Header>
      <Search>
        <svg viewBox="0 0 788.5 1000" fill="#54656f" height="20px" width="20px">
          <path d="M772 772c20 22.667 22 43.333 6 62l-46 46c-24 21.333-46.667 21.333-68 0L474 690c-49.333 28-101.333 42-156 42-85.333 0-159.667-31.667-223-95S0 499.333 0 414s30-158.333 90-219 132.667-91 218-91 160 31.667 224 95 96 137.667 96 223c0 58.667-15.333 112.667-46 162l190 188M94 414c0 58.667 22.667 110.667 68 156s97.333 68 156 68 109-21 151-63 63-93 63-153c0-58.667-22.667-110.333-68-155s-97.333-67-156-67-109 21-151 63-63 92.333-63 151" />
        </svg>
        <SearchInput placeholder="Search" />
      </Search>
      <Chats>
        <Chat onClick={() => openChat(true)}>
          <Avatar size="large">JD</Avatar>
          <h4>John Doe</h4>
        </Chat>
        <Chat onClick={() => openChat(true)}>
          <Avatar size="large">JD</Avatar>
          <h4>John Doe</h4>
        </Chat>
        <Chat onClick={() => openChat(true)}>
          <Avatar size="large">JD</Avatar>
          <h4>John Doe</h4>
        </Chat>
      </Chats>
    </Container>
  );
}

const Container = styled.div`
  width: 350px;
  border-right: 1px solid #e9edef;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 25px;

  > svg {
    cursor: pointer;
  }
`;

const Header = styled.div`
  background-color: #f0f2f5;
  display: flex;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #e9edef;
`;

const Search = styled.div`
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  margin: 10px 15px;
  border-radius: 7px;

  > svg {
    margin: 0px 15px;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  background-color: transparent;
  outline-width: 0;
  border: none;
  flex: 1;
`;

const Chats = styled.div`
  border-top: 1px solid #e9edef;
`;

const Chat = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px;
  background-color: #fff;
  border-bottom: 1px solid #e9edef;
  cursor: pointer;

  :hover {
    background-color: #f5f6f6;
  }

  > h4 {
    font-weight: 400;
  }
`;
