import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { IndexPage } from "./pages/index.jsx";

import { PasswordPage } from "./pages/password";
import { NumberPage } from "./pages/number";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/password" element={<PasswordPage />} />
      <Route path="/number" element={<NumberPage />} />
    </Routes>
  );
}
