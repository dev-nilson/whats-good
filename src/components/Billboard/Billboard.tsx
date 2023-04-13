import styled from "styled-components";

export default function Billboard() {
  return (
    <Container>
      <Info>
        <h1>WhatsGood Web</h1>
        <p>Send and receive messages</p>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  background-color: #f0f2f5;
`;

const Info = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid #25d366;

  > h1 {
    color: #41525d;
    font-weight: 300;
  }

  > p {
    color: #667781;
    font-size: 14px;
  }
`;
