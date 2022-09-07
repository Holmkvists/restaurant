import "./main/styles/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "pages/HomePage/HomePage";
import { Menu } from "pages/Menu/Menu";
import { Booking } from "./pages/Booking/Booking";
import { Confirmation } from "components/Confirmation/Confirmation";
import { Contact } from "./pages/Contact/Contact";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meny" element={<Menu />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/boka-bord" element={<Booking />} />
        <Route
          path="/bokningsbekraftelse"
          element={<Confirmation type="bokningsbekraftelse" />}
        />
        <Route
          path="/avbokningsbekraftelse/:id"
          element={<Confirmation type="avbokningsbekraftelse" />}
        />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
