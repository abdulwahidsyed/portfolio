import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/UI/Header";
import { SideDrawer } from "./components/UI/SideDrawer";
import { StyledApp } from "./components/UI/Styled/Master.styled";
import Router from "./Router";
import { Backdrop } from "./components/UI/Backdrop";

function App() {
  const { showBackdrop } = useSelector((st) => st.master);

  return (
    <StyledApp className="App">
      <Header />
      <Router />
      <SideDrawer />
      <Backdrop show={showBackdrop} />
    </StyledApp>
  );
}

export default App;
