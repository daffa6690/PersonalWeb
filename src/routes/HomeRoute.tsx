import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/routes/Home";

function HomeRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default HomeRoute;
