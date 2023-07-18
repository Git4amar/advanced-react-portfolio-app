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
      <HashRouter basename="/advanced-react-portfolio-app">
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
          <Route exact path="/" component={LandingSection} />
          <Route path="/projects" component={ProjectsSection} />
          <Route path="/contact-me" component={ContactMeSection} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
