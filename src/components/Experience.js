import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import ExperienceItems from "./ExperienceItems";

const experience = [
  {
    position: "Patient Journey Coordinator",
    company: "The Melbourne Psychiatry Centre",
    date: "Apr 2023 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor id eu nisl nunc mi. Nunc mattis enim ut tellus elementum sagittis vitae et. Nisi quis eleifend quam adipiscing vitae proin sagittis. Eget mauris pharetra et ultrices neque ornare aenean. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Adipiscing commodo elit at imperdiet. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. At elementum eu facilisis sed odio morbi. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing.",
    imageSrc: require("../images/MPC_logo.png"),
  },
  {
    position: "Youth Mentor",
    company: "Raise Foundation",
    date: "Mar 2023 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor id eu nisl nunc mi. Nunc mattis enim ut tellus elementum sagittis vitae et. Nisi quis eleifend quam adipiscing vitae proin sagittis. Eget mauris pharetra et ultrices neque ornare aenean. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Adipiscing commodo elit at imperdiet. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. At elementum eu facilisis sed odio morbi. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing.",
    imageSrc: require("../images/raise_foundation_logo.png"),
  },
  {
    position: "Lifeline Crisis Supporter",
    company: "Lifeline Australia",
    date: "Aug 2021 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor id eu nisl nunc mi. Nunc mattis enim ut tellus elementum sagittis vitae et. Nisi quis eleifend quam adipiscing vitae proin sagittis. Eget mauris pharetra et ultrices neque ornare aenean. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Adipiscing commodo elit at imperdiet. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. At elementum eu facilisis sed odio morbi. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing.",
    imageSrc: require("../images/Lifeline_Logo.jpg"),
  },
  {
    position: "Youth Reference Group Coordinator",
    company: "headspace",
    date: "Dec 2021 - Jan 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor id eu nisl nunc mi. Nunc mattis enim ut tellus elementum sagittis vitae et. Nisi quis eleifend quam adipiscing vitae proin sagittis. Eget mauris pharetra et ultrices neque ornare aenean. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Adipiscing commodo elit at imperdiet. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. At elementum eu facilisis sed odio morbi. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing.",
    imageSrc: require("../images/headspace_logo.jpg"),
  },
];

const Experience = () => {
  return (
    <FullScreenSection
      id="experience"
      backgroundColor="#345b8f"
      isDarkBackground
      px={8}
      py={20}
      alignItems="center"
      spacing={8}
    >
      <Heading as="h1">Experience</Heading>
        {experience.map((experienceItem) => (
          <ExperienceItems
            key={experienceItem.position}
            position={experienceItem.position}
            company={experienceItem.company}
            date={experienceItem.date}
            description={experienceItem.description}
            imageSrc={experienceItem.imageSrc}
          />
        ))}
    </FullScreenSection>
  );
};

export default Experience;
