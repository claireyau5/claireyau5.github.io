import React from "react";
import { Text, Heading, VStack, Box, Image, Flex } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import WavyBreakLine from "./WavyBreakLine";

const Bio = () => {
  const colorTheme = "#efebe4";

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
          <Heading as="h1">Who Is Claire Yau?</Heading>
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
              <Text py={3}>
                Claire Yau is a driven psychology enthusiast, passionate about
                understanding the complexities of the human mind and the impact
                of behavior on mental health. Her educational background
                includes a Bachelor of Psychology (Hons) degree from the
                Australian National University (ANU), where she gained a
                comprehensive understanding of the theories and applications of
                psychology.
              </Text>
              <Text py={3}>
                Currently working as a Patient Journey Coordinator at the
                Melbourne Psychiatry Centre, Claire is dedicated to providing
                patients with the resources and support they need to navigate
                the healthcare system and receive the best possible care. Her
                work has inspired her to pursue a career as a clinical
                psychologist, where she hopes to work directly with patients to
                provide evidence-based treatments and interventions.
              </Text>
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
              <Text py={3}>
                As an active volunteer with organizations like Raise Foundation
                and Lifeline, Claire puts her knowledge into practice by serving
                as a mentor and crisis supporter. Her commitment to promoting
                mental health awareness has also led her to volunteer with
                Headspace and ANU Thrive, where she worked to raise awareness
                and encourage wellbeing on campus.
              </Text>
              <Text py={3}>
                With her passion for psychology and her desire to help others,
                Claire strives to promote access to psychological services and
                resources for everyone. She believes that by providing support
                and resources to those in need, we can all work together to
                create a more mentally healthy society.
              </Text>
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
