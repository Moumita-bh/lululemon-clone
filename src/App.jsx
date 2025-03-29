import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavbar from "./Components/TopNavbar";
import HomePage from "./pages/HomePage"; // Add a Home Page
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import BagsPage from "./pages/BagsPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import ShoesPage from "./pages/ShoesPage";
import MembersOffersPage from "./pages/MembersOffersPage";

function App() {
  return (
    <Router>
      <TopNavbar />

      <Routes>
        <Route path="/" element={<HomePage />} /> {/* ✅ Default Route */}
        <Route path="/women" element={<WomenPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/bags" element={<BagsPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/shoes" element={<ShoesPage />} />
        <Route path="/member-offers" element={<MembersOffersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
