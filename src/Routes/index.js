import { Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home";
import Portfolio from "../Components/Pages/Portfolio";
import Contact from "../Components/Pages/Contact";

function RoutesContent() {
  return (
    <Routes>
      <Route
        path="/jonathan"
        element={<Home />}
      />
      <Route
        path="/portfolio"
        element={<Portfolio />}
      />
      <Route
        path="/contact"
        element={<Contact />}
      />
    </Routes>
  );
}

export default RoutesContent;
