import "./main/styles/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./pages/contact/contact";
import { NotFound } from "./pages/notfound/notfound";
import { Home } from "./pages/home/home";
import { Booking } from "./pages/booking/booking";
import { CancelledBooking } from "./pages/CancelledBooking/CancelledBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/book" element={<Booking />}></Route>
        <Route path="/cancel" element={<CancelledBooking />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
