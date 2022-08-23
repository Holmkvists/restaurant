import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Booking } from "./pages/booking/booking";
import { Contact } from "./pages/contact/contact";
import { Home } from "./pages/home/home";
import { NotFound } from "./pages/notfound/notfound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
