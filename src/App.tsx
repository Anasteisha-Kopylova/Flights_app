import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FlightsPage from "./pages/FlightsPage";
import FlightDetailsPage from "./pages/FlightDetailsPage";
import Cart from "./features/cart/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FlightsPage />} />
        <Route path="/flights/:id" element={<FlightDetailsPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
