import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar1";
import Hero from "./Hero";
import Footer from "./Footer";
import Jobs from "./components/Jobs";
import Companies from "./components/Companies";
import CompanyJobs from "./components/CompanyJobs";
import Applications from "./components/Applications";
import AddJob from "./components/AddJob";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import RequireAuth from "./components/RequireAuth";
import Search from "./components/Search";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Router>
        <NavBar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:companyName" element={<CompanyJobs />} />
            <Route
              path="/applications"
              element={
                <RequireAuth>
                  <Applications />
                </RequireAuth>
              }
            />
            <Route
              path="/add-job"
              element={
                <RequireAuth>
                  <AddJob />
                </RequireAuth>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;