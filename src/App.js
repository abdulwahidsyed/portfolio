import "./App.css";
import Header from "./components/UI/Header";
import { StyledApp } from "./components/UI/Styled/Master.styled";
import Router from "./Router";

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <Router />
    </StyledApp>
  );
}

export default App;
