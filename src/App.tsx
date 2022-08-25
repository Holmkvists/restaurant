// import "./css/main.css";
import "./main/styles/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./pages/contact/contact";
import { NotFound } from "./pages/notfound/notfound";
import { Home } from "./pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
