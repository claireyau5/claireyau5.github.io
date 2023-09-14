import React from "react";
import { Text, Heading, VStack, Box, Image, Flex } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import WavyBreakLine from "./WavyBreakLine";

const Bio = () => {
  const colorTheme = "#efebe4";

  const firstPara =
    "Claire Yau's fascination with the intricacies of the human psyche is evident in both her academic and professional pursuits. Holding a Bachelor of Psychology (Hons) degree from the Australian National University (ANU), Claire has deeply explored the nuances of psychological theories and their real-world applications.";
  const secondPara =
    "In her role as a Patient Journey Coordinator at the Melbourne Psychiatry Centre, Claire assists patients in navigating the intricate healthcare system, ensuring they receive optimal care. This experience has further solidified her aspiration to become a clinical psychologist, where she envisions herself offering evidence-based therapeutic interventions.";
  const thridPara =
    "Outside the professional realm, Claire actively contributes to the community. She mentors and serves as a crisis supporter with organizations like the Raise Foundation and Lifeline. Her advocacy for mental health has also led her to roles with Headspace and ANU Thrive, championing mental health awareness and fostering wellbeing among students.";
  const forthPara =
    "Claire's unwavering commitment to psychology is rooted in her mission: ensuring everyone can access vital psychological resources and support. In promoting these services, she is driven by the conviction that together, we can forge a mentally healthier society.";

  return (
    <>
      <FullScreenSection
        id="bio"
        backgroundColor={colorTheme}
        color="#383842"
        px={8}
        py={10}
        alignItems="flex-start"
        justifyContent="center"
        spacing={8}
        position="relative"
      >
        <VStack spacing="20">
          <Heading as="h1">About Claire Yau</Heading>
          <Flex
            flexDirection={{ lg: "row", base: "column-reverse" }}
            justifyContent="center"
            justifyItems="center"
            alignItems="center"
            gap={20}
          >
            <Box
              w={{ xl: "50%", base: "100%" }}
              p={2}
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src={require("../images/grad.jpeg")}
                border="solid gray 2px"
                p="10px"
                boxShadow="5px 10px #888888"
              />
            </Box>
            <Box w={{ xl: "50%", base: "100%" }}>
              <Text py={3}>{firstPara}</Text>
              <Text py={3}>{secondPara}</Text>
            </Box>
          </Flex>
          <Flex
            flexDirection={{ lg: "row", base: "column" }}
            justifyContent="center"
            justifyItems="center"
            alignItems="center"
            gap={20}
          >
            <Box w={{ xl: "50%", base: "100%" }}>
              <Text py={3}>{thridPara}</Text>
              <Text py={3}>{forthPara}</Text>
            </Box>
            <Box
              w={{ xl: "50%", base: "100%" }}
              p={2}
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src={require("../images/headspace.jpeg")}
                border="solid gray 2px"
                p="10px"
                boxShadow="5px 10px #888888"
              />
            </Box>
          </Flex>
        </VStack>
      </FullScreenSection>
      <WavyBreakLine
        svgTransform="rotateX(180deg)"
        svgBgColor="#345b8f"
        pathD="M0,0 C 20,10 35,80 50,60 C 65,40 80,70 100,50 L 100,100 L 0,100 Z"
        pathFill={colorTheme}
      />
    </>
  );
};

export default Bio;
