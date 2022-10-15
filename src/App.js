import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Header from "./Pages/Shared/Header/Header";

import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import JoinNow from "./Pages/JoinNow/JoinNow";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Checkout from "./Pages/Checkout/Checkout";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/joinNow" element={<JoinNow />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
