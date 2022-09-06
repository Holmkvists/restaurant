import "./main/styles/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "pages/HomePage/HomePage";
import { Contact } from "./pages/Contact/Contact";
import { NotFound } from "./pages/NotFound/NotFound";
import { Booking } from "./pages/Booking/Booking";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { ConfirmationPage } from "components/ConfirmationPage/ConfirmationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kontakt" element={<Contact />}></Route>
        <Route path="/boka-bord//*" element={<Booking />}></Route>
        <Route
          path="/bokningsbekraftelse"
          element={<ConfirmationPage type="bokningsbekraftelse" />}
        />
        <Route
          path="/avbokningsbekraftelse/:id"
          element={<ConfirmationPage type="avbokningsbekraftelse" />}
        />
        <Route path="adminPage" element={<AdminPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
