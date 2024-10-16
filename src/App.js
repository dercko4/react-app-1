import React from "react";
import NavBar from "./components/Header"
import { Card, Container } from "react-bootstrap";
function App() {
  return (
  <>
  <NavBar/>
    <Container style={{display: "flex", justifyContent: "center", background: "#DCDCDC", width: "500px", height: "680px",
    border: "1px outset #99958C"}}>
      Hello
    </Container>
  </>
  )
}

export default App;
