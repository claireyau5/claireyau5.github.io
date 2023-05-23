import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";
import Bio from "./components/Bio"
import Certificate from "./components/Certificate";

function App() {
  return (
    <ChakraProvider>
        <main>
          <Header />
          <LandingSection />
          <Bio />
          
          <Certificate />
          <Footer />
        </main>
    </ChakraProvider>
  );
}

export default App;
