import { Box, HStack } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Header = () => {

  return (
    <Box
      top={0}
      left={0}
      right={0}
      fontSize="14px"
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="1"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={{ md: 16, base: 8 }}
          py={4}
          justifyContent={{ md: "center", base: "flex-start" }}
          alignItems={{ md: "center", base: "flex-start" }}
        >
          <Navbar />
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
