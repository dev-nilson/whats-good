import styled from "styled-components";

export default function Billboard() {
  return (
    <Container>
      <Info>
        <h1>WhatsGood Web</h1>
        <p>Send and receive messages</p>
        <Disclaimer>
          <svg
            viewBox="0 0 24 24"
            fill="#8696a0"
            height="15px"
            width="15px"
          >
            <path d="M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z" />
          </svg>
          <p>End-to-end encrypted</p>
        </Disclaimer>
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

const Disclaimer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 5px;
  bottom: 30px;
  color: #8696a0;
  font-size: 13px;
`;
