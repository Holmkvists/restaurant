// IMPORTS

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "pages/HomePage/HomePage";
import { MenuPage } from "pages/MenuPage/MenuPage";
import { BookingPage } from "./pages/BookingPage/BookingPage";
import { Confirmation } from "components/Confirmation/Confirmation";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import "./main/styles/main.css";

// COMPONENTS STRUCTURE

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meny" element={<MenuPage />} />
        <Route path="/boka-bord" element={<BookingPage />} />
        <Route
          path="/bokningsbekraftelse"
          element={<Confirmation type="bokningsbekraftelse" />}
        />
        <Route
          path="/avbokningsbekraftelse/:id"
          element={<Confirmation type="avbokningsbekraftelse" />}
        />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
