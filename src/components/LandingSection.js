import React from "react";
import { Heading, VStack, Text, Box } from "@chakra-ui/react";
import lbg from "../images/lbg.jpeg";
//import FullScreenSection from "./FullScreenSection";

const hero = "Claire Yau";
const subhero = "Psychology Graduate";

const LandingSection = () => {
  return (
    <Box
      display='flex'
      flex='1 1 auto'
      py={20}
      px={5}
      justifyContent="space-between"
      minHeight="100vh"
      color="white"
      bg={`linear-gradient(to bottom, rgba(32,32,32,0.2), rgba(32,32,32,0.2)), url(${lbg})`}
      bgSize="cover"
    >
      <VStack
        w='60%'
        spacing={5}
        p={5}
        alignItems="flex-start"
        justifyContent='top'
        position="relative"
      >
        <Heading fontSize={'9xl'}>
          {hero}
        </Heading>
        <Text fontSize={'4xl'}>
          {subhero}
        </Text>
      </VStack>
      <VStack
        w='40%'
        spacing={5}
        p={5}
        alignItems="flex-end"
        justifyContent='flex-end'
        position="relative"
      >
        <Text fontSize={'md'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Text>
      </VStack>
    </Box>
  )
};

export default LandingSection;
