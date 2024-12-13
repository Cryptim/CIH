import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FooterSection from "./components/FooterSection";
import HomePage from "./components/Homepage"; // Import HomePage component
import WorkshopPage from "./components/WorkshopPage"; // Import the page you're linking to

function App() {
  return (
    <Router>
      <div className="App">
        {/* The Header is visible on all pages */}
        <Header />

        {/* Define the routes for the app */}
        <Routes>
          {/* Homepage route */}
          <Route path="/" element={<HomePage />} />

          {/* Route for the Workshop Page */}
          <Route path="/workshop-page" element={<WorkshopPage />} />
        </Routes>

        {/* Footer section visible on all pages */}
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
