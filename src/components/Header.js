import { Box, HStack } from "@chakra-ui/react";
import NavItem from "./NavItem";

const Header = () => {

  return (
    <Box
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#efebe4"
      zIndex="1"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          color="#383842"
          px={{ md: 16, base: 8 }}
          py={4}
          justifyContent={{ md: "center", base: "flex-start" }}
          alignItems={{ md: "center", base: "flex-start" }}
        >
          <NavItem />
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
