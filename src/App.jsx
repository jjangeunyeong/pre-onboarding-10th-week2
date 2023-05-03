import Title from "./components/Title";
import SearchArea from "./components/SearchArea";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <SubContainer>
        <Title />
        <SearchArea />
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d0e8fd;
  width: 630px;
  padding: 30px 20px;
`;

export default App;
