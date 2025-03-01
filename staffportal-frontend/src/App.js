import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import UserHome from "./staff-view/userHome/UserHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/UserHome" element={<UserHome/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
