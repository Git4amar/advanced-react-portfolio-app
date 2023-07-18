import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import ButtonToTop from "./components/ButtonToTop"
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <ChakraProvider>
      <HashRouter basename="/">
        <AlertProvider>
          <main>
            <Header />
            <LandingSection />
            <ProjectsSection />
            <ContactMeSection />
            <Footer />
            <Alert />
            <ButtonToTop />
          </main>
        </AlertProvider>
        <Routes>
          <Route path="/" />
          <Route path="/projects" />
          <Route path="/contact-me" />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
