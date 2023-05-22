import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";
import BioSection from "./components/BioSection"
import CertificateSection from "./components/CertificateSection";

function App() {
  return (
    <ChakraProvider>
        <main>
          <Header />
          <LandingSection />
          <BioSection />
          <CertificateSection />
          <Footer />
        </main>
    </ChakraProvider>
  );
}

export default App;
