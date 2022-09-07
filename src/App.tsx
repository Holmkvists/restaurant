import "./main/styles/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "pages/HomePage/HomePage";
import { Menu } from "pages/Menu/Menu";
import { Booking } from "./pages/Booking/Booking";
import { ConfirmationPage } from "components/ConfirmationPage/ConfirmationPage";
import { Contact } from "./pages/Contact/Contact";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meny" element={<Menu />} />
        <Route path="/boka-bord" element={<Booking />} />
        <Route
          path="/bokningsbekraftelse"
          element={<ConfirmationPage type="bokningsbekraftelse" />}
        />
        <Route
          path="/avbokningsbekraftelse/:id"
          element={<ConfirmationPage type="avbokningsbekraftelse" />}
        />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
