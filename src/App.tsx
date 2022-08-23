import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin } from "./pages/admin/admin";
import { Contact } from "./pages/contact";
import { Home } from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
