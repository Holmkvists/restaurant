import "./main/styles/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "pages/HomePage/HomePage";
import { Contact } from "./pages/contact/contact";
import { NotFound } from "./pages/notfound/notfound";
import { Booking } from "./pages/booking/booking";
import { CancelledPage } from "./pages/CancelledPage/CancelledPage";
import { AdminPage } from "./pages/AdminPage/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/book" element={<Booking />}></Route>
        <Route path="/adminPage" element={<AdminPage />}></Route>
        <Route path="/cancel/:id" element={<CancelledPage />} />
        <Route path="/adminPage" element={<AdminPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
