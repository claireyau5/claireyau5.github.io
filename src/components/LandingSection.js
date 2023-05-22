import React from "react";
import { Heading, VStack, Text, Box } from "@chakra-ui/react";
import lbg from "../images/lbg.jpeg";
//import FullScreenSection from "./FullScreenSection";

const LandingSection = () => {
  return (
    <Box
      display="flex"
      flex="1 1 auto"
      py={20}
      px={5}
      justifyContent="space-between"
      minHeight="100vh"
      color="white"
      bg={`linear-gradient(to bottom, rgba(32,32,32,0.2), rgba(32,32,32,0.2)), url(${lbg})`}
      bgSize="cover"
    >
      <VStack
        spacing={5}
        p={5}
        alignItems="flex-start"
        justifyContent="top"
        position="relative"
      >
        <Heading fontSize={"9xl"}>Claire Yau</Heading>
        <Text fontSize={"4xl"}>Psychology Graduate</Text>
      </VStack>
      <VStack
        w="40%"
        spacing={5}
        p={5}
        alignItems="flex-end"
        justifyContent="flex-end"
        position="relative"
      >
        <Text fontSize={"md"}>
          Passionate at becoming a clinical psychologist, where
          she can help individuals overcome mental health challenges and live
          fulfilling lives. With her educational background in psychology and
          her experience in patient care, Claire is dedicated to reducing the
          stigma surrounding mental health and promoting access to psychological
          services.
        </Text>
      </VStack>
    </Box>
  );
};

export default LandingSection;
