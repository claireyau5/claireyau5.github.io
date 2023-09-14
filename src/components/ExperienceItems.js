import {
  Heading,
  Image,
  Text,
  VStack,
  Flex,
  Box,
  Grid,
} from "@chakra-ui/react";
import React from "react";

const ExperienceItems = ({
  position,
  company,
  date,
  description,
  imageSrc,
}) => {
  return (
    <Flex
      flexDirection={{ md: "row", base: "column" }}
      justifyContent="center"
      justifyItems="center"
      alignItems="center"
      backgroundColor="white"
      borderRadius="25px"
      boxShadow="5px 5px 10px #0f2849"
    >
      <Box
        display={"flex"}
        w={{ md: "30%", base: "50%" }}
        py={4}
        px={[2, 4]}
        justifyContent="center"
        alignItems="center"
      >
        <Image src={imageSrc} />
      </Box>
      <Box w={{ md: "70%", base: "100%" }} color="black">
        <VStack spacing={5} p={4} align="left">
          <Text color="#575757" fontSize={"sm"}>
            {date}
          </Text>
          <Heading size="md">{position}</Heading>
          <Heading size="sm" color="#575757" style={{ marginTop: "4px" }}>
            {company}
          </Heading>
          <Text color="#575757">{description}</Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default ExperienceItems;
