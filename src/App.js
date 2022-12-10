
import React from "react";
import Header from "./Header/Header";
import NavigationContainer from "./Navigation/Navigation";
import Container from "./Container/Container";
import "./style.js"
import {AppContainer} from "./style";

function App() {
  return (
    <AppContainer>
      <Header />
      <NavigationContainer />
      <Container />
    </AppContainer>
  );
}

export default App;
