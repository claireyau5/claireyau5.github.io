import React from "react";
import { Text, Heading, VStack, Box, Image, Flex } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const Bio = () => {
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
            <VStack spacing={5} >
                <Heading as='h1'>
                    Who Am I?
                </Heading>
                <Flex
                    justifyContent='center'
                    justifyItems='center'
                    alignItems='center'
                    gap={9}
                    >
                    <Box
                        //w={{ base: "none", lg: '40%' }}
                        w='50%'
                        p={2}
                        justifyContent="center"
                        alignItems="center">
                        <Image src={require("../images/img5.jpeg")} border='solid gray 2px' p='10px' boxShadow=' 5px 10px #888888' />
                    </Box>
                    <Box w='50%'>
                        <Text py={3}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

                        </Text>


                        <Text py={3}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

                        </Text>
                        <Text py={3}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

                        </Text>
                    </Box>
                </Flex>
            </VStack>
        </FullScreenSection>
    )
};

export default Bio;
