import "./main/styles/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "pages/HomePage/HomePage";
import { Contact } from "./pages/contact/contact";
import { NotFound } from "./pages/notfound/notfound";
import { Booking } from "./pages/booking/booking";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { ConfirmationPage } from "pages/ConfirmationPage/ConfirmationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Booking />}></Route>
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/boka-bord/:confirmation" element={<ConfirmationPage />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
