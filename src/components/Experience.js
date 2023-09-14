import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Text, Flex, Image, VStack } from "@chakra-ui/react";
import ExperienceItems from "./ExperienceItems";

const experience = [
  {
    position: "Patient Journey Coordinator",
    company: "The Melbourne Psychiatry Centre",
    date: "Apr 2023 - Present",
    description:
      "As a Patient Journey Coordinator at the Melbourne Psychiatry Centre, my responsibilities spanned guiding patients through their healthcare journey, collaborating with a multidisciplinary team, and ensuring patients were well-informed about their treatment options. I played a pivotal role in identifying and coordinating essential resources tailored to each patient's needs, further enhancing their treatment outcomes. My experience emphasised the critical nature of a patient-centric approach and effective communication in the realm of mental health care. My tenure provided invaluable insights into the intricacies of coordinating patient care in a bustling psychiatry centre, further fuelling my passion and commitment to the field.",
    imageSrc: require("../images/MPC_logo.png"),
  },
  {
    position: "Youth Mentor",
    company: "Raise Foundation",
    date: "Mar 2023 - Present",
    description:
      "Serving as a Youth Mentor for the Raise Foundation allowed me to put my passion for mental health into practice, particularly in the context of adolescent well-being. In this role, I provided one-on-one mentorship to young individuals facing a variety of challenges, from academic stress to emotional well-being. My involvement enabled me to refine my interpersonal skills and deepen my understanding of the unique mental health needs of adolescents. Through open dialogue and supportive mentorship, I was able to make a meaningful impact in the lives of young people, thereby confirming my belief in the vital importance of early intervention in mental health.",
    imageSrc: require("../images/raise_foundation_logo.png"),
  },
  {
    position: "Lifeline Crisis Supporter",
    company: "Lifeline Australia",
    date: "Aug 2021 - Present",
    description:
      "As a Crisis Supporter for Lifeline, I was at the forefront of providing immediate assistance to individuals experiencing emotional distress or confronting challenging situations. This role demanded acute listening skills, empathetic communication, and a deep understanding of mental health crises. Each call was a lesson in the importance of patience, resilience, and offering a non-judgmental ear to someone in their moment of need. The experience solidified my belief in the importance of accessible mental health support and strengthened my resolve to pursue a career dedicated to assisting those facing mental health challenges.",
    imageSrc: require("../images/Lifeline_Logo.jpg"),
  },
  {
    position: "Youth Reference Group Coordinator",
    company: "headspace",
    date: "Dec 2021 - Jan 2023",
    description:
      "In my capacity as a Youth Reference Group Coordinator and Wellbeing Team Leader, I played a dual role in both guiding and supporting young individuals. Tasked with organising and leading group discussions, I ensured that young voices were heard and represented in broader discussions about well-being and mental health. My leadership role allowed me to devise and implement well-being initiatives, catering specifically to the needs and concerns voiced by the youth in our group. This position not only honed my organisational and leadership skills but also deepened my appreciation for the importance of youth involvement in shaping mental health policies and initiatives.",
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
      <VStack spacing={8}>
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
      </VStack>
    </FullScreenSection>
  );
};

export default Experience;
