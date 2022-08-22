import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage/Homepage";
import { About } from "./components/About/About";
import { User } from "./components/User/User";
import { Register } from "./components/User/Register";
import { Login } from "./components/User/Login";
import { Post } from "./components/Post/Post";

function App() {
  return (
    <div style={{ fontSize: "1rem" }}>
      <Navbar />
      <div
        style={{
          width: "calc(100vw - 4vw)",
          height: "calc(100vh - 80px - 2vw)",
          margin: "2vw",
          marginTop: "140px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user">
            <Route path=":username" element={<User />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
