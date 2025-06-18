import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar1";
import Hero from "./Hero";
import Footer from "./Footer";
import AddJob from "./components/AddJob";
import Jobs from "./components/Jobs";
import Companies from "./components/Companies";
import CompanyJobs from "./components/CompanyJobs";
import Search from "./components/Search";
import About from "./components/About";
import Applications from "./components/Applications";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/:companyName" element={<CompanyJobs />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;