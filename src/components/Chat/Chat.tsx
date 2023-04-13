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
        <IconsContainer></IconsContainer>
      </Header>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  background-color: #efeae2;
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
