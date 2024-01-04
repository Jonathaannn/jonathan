import { BrowserRouter as Router } from "react-router-dom";
import RoutesContent from "./Routes";

import Container from "./Components/Layouts/Container";
import NavBar from "./Components/Layouts/NavBar";

function App() {
  const { innerWidth: width } = window;
  return (
    <Router>
      <Container customClass={width > 1023 ? "shade" : "responsive"}>
        <NavBar />
        <RoutesContent />
      </Container>
    </Router>
  );
}

export default App;
