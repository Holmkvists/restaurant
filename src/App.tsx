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
        <Route path="/kontakt" element={<Contact />}></Route>
        <Route path="/boka-bord//*" element={<Booking />}></Route>
        <Route path="/cancel" element={<CancelledPage />} />
        <Route path="adminPage" element={<AdminPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
