import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Logo from "./Components/Logo";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Amantrit_vakta from "./Components/Amantrit_vakta";
import Registration from "./Components/Registration";
import Invitation from "./Components/Invitation";
import About from "./Components/About";
import Publication from "./Components/Publication";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import './App.css';

// 👇 Wrapper component to access location
function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <Box
  sx={{
    minHeight: "100vh",
    overflowX: "hidden", // ✅ prevent child overflow
    backgroundColor: isHome ? "black" : "white",
    color: isHome ? "white" : "black",
    transition: "background-color 0.5s ease, color 0.5s ease",
  }}
>

      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          background: isHome ? "black" : "white",
          color: isHome ? "white" : "black",
          height: "100px",
        }}
      >
        <Logo />
        <Navbar />
      </Box>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speakers" element={<Amantrit_vakta />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/about" element={<About />} />
        <Route path="/publication" element={<Publication />} />
      </Routes>

      <Footer />
    </Box>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/">
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}
