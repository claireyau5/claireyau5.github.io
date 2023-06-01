import React, { useState } from "react";
import {
  Text,
  Heading,
  VStack,
  Box,
  Image,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import FullScreenSection from "./FullScreenSection";

const certificates = [
  {
    title: "CPR First Aid",
    imageSrc: require("../images/certificate.PNG"),
  },
  {
    title: "Aboriginal and Torres Strait Islander Mental Health First Aid",
    imageSrc: require("../images/ATSI_certificate.png"),
  },
  {
    title: "Youth Mentor Training",
    imageSrc: require("../images/YMT_certificate.png"),
  },
];

const Certificate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const totalCertificates = certificates.length;

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalCertificates - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCertificates);
  };

  const currentCertificate = certificates[currentIndex];

  const imgaeBoxWidth = 0.8;

  const buttonBoxWidth = (1 - imgaeBoxWidth) / 2;

  return (
    <FullScreenSection
      id="certificate"
      backgroundColor="#fdfdfd"
      color="#383842"
      px={8}
      py={10}
      alignItems="center"
      justifyContent="center"
      spacing={8}
    >
      <Box w="100%" position="relative">
        <VStack spacing={10}>
          <Heading as="h1">Certifications</Heading>
          <Flex justifyContent="center" alignItems="center" gap={20}>
            <Box
              w={buttonBoxWidth}
              p={2}
              justifyContent="center"
              alignItems="center"
            >
              <IconButton
                color="#e2e8f0"
                backgroundColor="#383842"
                icon={<ChevronLeftIcon />}
                aria-label="Previous Slide"
                onClick={goToPrevSlide}
                disabled={totalCertificates <= 1}
                position="absolute"
                left="0"
                top="50%"
                transform="translateY(-50%)"
                _hover={{ backgroundColor: "#e2e8f0", color: "#383842" }}
              />
            </Box>
            <Box w="80%" p={2} justifyContent="center" alignItems="center">
              <Image
                onClick={onOpen}
                cursor="pointer"
                src={currentCertificate.imageSrc}
                border="ridge #815a00 20px"
                maxW="100%"
                maxH="100%"
                objectFit="cover"
              />
              <Text fontWeight="600" textAlign="center" mt={5}>
                {currentCertificate.title}
              </Text>
              <Text fontSize="sm" fontWeight="600" textAlign="center" mt={2}>
                ({currentIndex + 1}/{totalCertificates})
              </Text>
              <Modal size="2xl" onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                  <ModalBody>
                    <Image src={currentCertificate.imageSrc} />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
            <Box
              w={buttonBoxWidth}
              p={2}
              justifyContent="center"
              alignItems="center"
            >
              <IconButton
                color="#e2e8f0"
                backgroundColor="#383842"
                icon={<ChevronRightIcon />}
                aria-label="Next Slide"
                onClick={goToNextSlide}
                disabled={totalCertificates <= 1}
                position="absolute"
                right="0"
                top="50%"
                transform="translateY(-50%)"
                _hover={{ backgroundColor: "#e2e8f0", color: "#383842" }}
              />
            </Box>
          </Flex>
        </VStack>
      </Box>
    </FullScreenSection>
  );
};

export default Certificate;
