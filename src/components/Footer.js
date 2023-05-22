import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <Flex
        margin="0 auto"
        px={12}
        color="white"
        justifyContent="center"
        alignItems="center"
        maxWidth="1024px"
        height={16}
      >
        <p>© 2023 Claire Yau</p>
      </Flex>
    </Box>
  );
};
export default Footer;
