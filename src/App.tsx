// IMPORTS

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "pages/HomePage/HomePage";
import { MenuPage } from "pages/MenuPage/MenuPage";
import { BookingPage } from "./pages/BookingPage/BookingPage";
import { Confirmation } from "components/Confirmation/Confirmation";
import { Contact } from "./pages/Contact/Contact";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { NotFound } from "./pages/NotFound/NotFound";
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
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
