import React from "react";
import "../timeline.css";
import {
  Text,
  Heading,
  VStack,
  Stack,
  Box,
  Image,
  Flex,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const experience = [
  {
    position: "Patient Journey Coordinator",
    company: "The Melbourne Psychiatry Centre",
    desccrption: "CPR First Aid",
    date: "Apr 2023",
    imageSrc: require("../images/certificate.PNG"),
  },
  {
    position: "Youth Mentor",
    company: "Raise Foundation",
    desccrption:
      "Aboriginal and Torres Strait Islander Mental Health First Aid",
    date: "Mar 2023",
    imageSrc: require("../images/ATSI_certificate.png"),
  },
  {
    position: "Lifeline Crisis Supporter",
    company: "Lifeline Australia",
    desccrption: "Youth Mentor Training",
    date: "Dec 2021",
    imageSrc: require("../images/YMT_certificate.png"),
  },
  {
    position: "Youth Reference Group Coordinator",
    company: "headspace",
    desccrption: "Youth Mentor Training",
    date: "Aug 2021",
    imageSrc: require("../images/YMT_certificate.png"),
  },
];

const Timeline = () => {
  return (
    <Stack
      gap={5}
      backgroundColor={"white"}
      alignItems={"flex-start"}
      position={"relative"}
      className="timeline-container left"
    >
      {experience.map((exp) => (
        <VStack
          className="timeline-item"
          position={"relative"}
          p={5}
          alignItems="flex-end"
          textAlign={"end"}
          borderRadius="5px"
          boxShadow="0px 0px 5px 2px grey"
          w="45%"
        >
          <Box className="timeline-item-content">
            <Text fontSize={"sm"}>{exp.date}</Text>
            <Heading as="h1" size={"md"} style={{ marginTop: "8px" }}>
              {exp.position}
            </Heading>
            <Text fontSize={"md"} style={{ marginTop: "2px" }}>
              {exp.company}
            </Text>
            <Text style={{ marginTop: "8px" }}>{exp.desccrption}</Text>
            <span className="circle" />
          </Box>
        </VStack>
      ))}
    </Stack>
  );
};

export default Timeline;
