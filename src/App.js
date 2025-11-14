import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import IntroSection from "./Components/IntroSection";
import About from "./Components/About";
import Description from "./Components/Description";
import Prize from "./Components/Prize";
import Organizers from "./Components/Organizers";
import Footer from "./Components/Footer";
import theme from "./Theme";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IntroSection />
      <About />
      <Description />
      <Prize />
      <Organizers />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
