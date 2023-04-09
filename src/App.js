import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import ScrollToTopButton from "./components/ScrollToTopButton";
import BioSection from "./components/BioSection"

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <BioSection />
          <ScrollToTopButton />
          <Footer />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
