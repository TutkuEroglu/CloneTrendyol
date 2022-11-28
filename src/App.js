import "./App.css";
import React from "react";
import Header from "./Header/Header";
import NavigationContainer from "./Navigation/Navigation";
import Container from "./Container/Container";

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationContainer />
      <Container />
    </div>
  );
}

export default App;
