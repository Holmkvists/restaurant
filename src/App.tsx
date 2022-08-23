import "./css/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./pages/contact/contact";
import { Home } from "./pages/home/home";
import { NotFound } from "./pages/notfound/notfound";

function App() {
  return (
    <div className="App">
      <Home />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
