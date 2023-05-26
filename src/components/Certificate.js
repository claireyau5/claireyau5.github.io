import React from "react";
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
  useDisclosure,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import FullScreenSection from "./FullScreenSection";

const Certificate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <svg
        width="100%"
        height="70"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: "relative",
          left: "0",
          right: "0",
          transform: "rotateX(180deg)",
        }}
      >
        <path
          d="M0,0 C 20,10 35,80 50,60 C 65,40 80,70 100,50 L 100,100 L 0,100 Z"
          fill="#efebe4"
        />
      </svg>
      <FullScreenSection
        id="certificate-section"
        backgroundColor="#fdfdfd"
        color="#383842"
        px={8}
        py={10}
        alignItems="flex-start"
        justifyContent="center"
        spacing={8}
      >
        <VStack spacing={10}>
          <Heading as="h1">Certification</Heading>
          <Flex
            justifyContent="center"
            justifyItems="center"
            alignItems="center"
            gap={20}
          >
            <Flex w="50%" justifyContent="center">
              <VStack spacing={5}>
                <Text fontSize="3xl" fontWeight="600" textAlign="center">
                  CPR First Aid Certification
                </Text>
              </VStack>
            </Flex>
            <Box
              //w={{ base: "none", lg: '40%' }}
              w="50%"
              p={2}
              justifyContent="center"
              alignItems="center"
            >
              <Image
                onClick={onOpen}
                cursor="pointer"
                src={require("../images/certificate.PNG")}
                border="ridge #815a00 20px"
              />
              <Modal size="2xl" onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                  <ModalBody>
                    <Image src={require("../images/certificate.PNG")} />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
          </Flex>
        </VStack>
      </FullScreenSection>
    </>
  );
};

export default Certificate;
