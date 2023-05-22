import React from "react";
import {
  Text,
  Heading,
  VStack,
  Box,
  Button,
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
    <FullScreenSection
      id="bio-section"
      backgroundColor="#efebe4"
      color="#383842"
      px={8}
      py={20}
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
            <VStack>
              <Heading as="h2" fontSize="3xl" py={3}>
                CPR First Aid Certification
              </Heading>
              <Button colorScheme="blue">
                <a href="certificate.pdf" download>
                  <DownloadIcon />
                  &nbsp;Download PDF
                </a>
              </Button>
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
  );
};

export default Certificate;
