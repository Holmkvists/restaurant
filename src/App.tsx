import "./main/styles/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./pages/contact/contact";
import { NotFound } from "./pages/notfound/notfound";
import { Booking } from "./pages/booking/booking";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { Home } from "pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/book" element={<Booking />}></Route>
        <Route path="adminPage" element={<AdminPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
