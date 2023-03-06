import "./App.css";
import Register from "./page/register.js";
import { Routes, Route, Link, HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <div class="min-h-screen pt-12 md:pt-20 pb-12 md:pb-20 px-7 md:px-0">
        <header class="max-w-lg mx-auto">
          <h1 class="text-4xl font-bold text-white text-center mb-5">
            <Link to="/register">정보 등록하기</Link>
          </h1>
        </header>
      </div>
    </>
  );
}

function Wrapper() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </HashRouter>
  );
}

export default Wrapper;
