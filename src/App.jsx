
import { useEffect } from "react";
import "../src/assets/css/style.css"
import Home from "./components/Home";
import { Route, Routes } from "react-router"

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </>

  );
}

export default App;
