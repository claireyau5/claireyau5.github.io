import React from "react";
import { Heading, VStack, Text, Box } from "@chakra-ui/react";
import lbg from "../images/lbg.jpeg";
//import FullScreenSection from "./FullScreenSection";

const LandingSection = () => {
  return (
    <Box
      display="flex"
      flexDirection={{xl:"row", base:"column"}}
      alignItems={{xl:"stretch", base:"center"}}
      justifyContent={{xl:"space-between", base:"center"}}
      textAlign={{xl:"start", base:"center"}}
      flex="1 1 auto"
      p={10}
      minHeight="100vh"
      color="white"
      bg={`linear-gradient(to bottom, rgba(32,32,32,0.2), rgba(32,32,32,0.2)), url(${lbg})`}
      bgSize="cover"
    >
      <VStack
        spacing={5}
        p={5}
        alignItems={{xl:"flex-start", base:"center"}}
        justifyContent="top"
        position="relative"
      >
        <Heading fontFamily={'Alex Brush, cursive'} fontSize={"9xl"}>Claire Yau</Heading>
        <Heading fontSize={"4xl"}>Psychology Graduate</Heading>
      </VStack>
      <VStack
        w={{xl:"40%", base:"100%"}}
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
