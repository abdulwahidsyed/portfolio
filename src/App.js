import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/UI/Header";
import { SideDrawer } from "./components/UI/SideDrawer/SideDrawer";
import { StyledApp } from "./components/UI/Styled/Master.styled";
import Router from "./Router";
import { Backdrop } from "./components/UI/Backdrop";
import { useThemes } from "./theme/useThemes";
import styled, { ThemeProvider } from "styled-components";

function App() {
  const { showBackdrop } = useSelector((st) => st.master);
  const theme = useThemes();

  return (
    <ThemeProvider theme={theme}>
      <StyledApp className="App">
        <Header />
        {/* <StyledCtn> */}
        <Router />
        {/* </StyledCtn> */}
        <SideDrawer />
        <Backdrop show={showBackdrop} />
      </StyledApp>
    </ThemeProvider>
  );
}

const StyledCtn = styled.div`
  backdrop-filter: blur(4px);
`;

export default App;
