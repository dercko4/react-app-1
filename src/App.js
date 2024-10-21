import React from "react";
import NavBar from "./components/Header/Header"
import MainLeft from "./containers/main/mainLeft";
import MainRight from "./containers/main/mainRight";

function App() {

  return (
    <>
      <NavBar/>
        <MainLeft />
        <MainRight/>
    </>
  )
}

export default App;
