import styled from "styled-components";
import { MessageFilled } from "@ant-design/icons";

export default function Sidebar() {
  return (
    <Container>
      <Header>
        <MessageFilled />
      </Header>
    </Container>
  );
}

const Container = styled.div``;

const Header = styled.div``;
