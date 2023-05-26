import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";
import Bio from "./components/Bio"
import Certificate from "./components/Certificate";

const theme = extendTheme({
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Helvetica, sans-serif', 
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
        <main>
          {/* <Header /> */}
          <LandingSection />
          <Bio />
          <Certificate />
          <Footer />
        </main>
    </ChakraProvider>
  );
}

export default App;
