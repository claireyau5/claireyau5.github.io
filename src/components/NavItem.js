import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  IconButton,
  Text,
  Box,
  HStack,
  VStack,
  useToast,
  Tooltip,
  Collapse,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "claire@claireyau.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/wai-shun-terence-lam-0a5b3b20b/",
  },
];

const NavItem = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const { isOpen, onToggle } = useDisclosure();

  const toast = useToast();

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <nav>
        <HStack spacing={8}>
          <nav>
            {isMobile && (
              <IconButton
                size="md"
                icon={<FontAwesomeIcon icon={faBars} />}
                display={{ md: "none" }}
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
                backgroundColor="white"
                color="black"
                _hover={{ backgroundColor: "whiteAlpha.800" }}
                _active={{ backgroundColor: "whiteAlpha.900" }}
                onClick={onToggle}
              />
            )}
            <Collapse in={isOpen} animateOpacity>
              <Box
                top="100%"
                right={0}
                mt={2}
                py={2}
                minWidth="max-content"
                zIndex={1}
              >
                <HStack spacing={4}>
                  <Box pb={4} overflow="hidden" transition="0.3s ease">
                    <VStack spacing={4} alignItems="flex-start">
                      <CopyToClipboard
                        text={socials.find((p) => p.icon === faEnvelope).url}
                      >
                        <div>
                          <Tooltip label="Copy email to clipboard">
                            <Text
                              onClick={() =>
                                toast({
                                  title: "Email copied!",
                                  status: "success",
                                  duration: 1500,
                                  position: "top",
                                  isClosable: true,
                                })
                              }
                              cursor="pointer"
                            >
                              claire@claireyau.com
                            </Text>
                          </Tooltip>
                        </div>
                      </CopyToClipboard>
                      <a href="#bio" onClick={handleClick("bio")}>
                        About Me
                      </a>
                      <a href="#projects" onClick={handleClick("projects")}>
                        Expereince
                      </a>
                    </VStack>
                  </Box>
                </HStack>
              </Box>
            </Collapse>
          </nav>
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            <CopyToClipboard
              text={socials.find((p) => p.icon === faEnvelope).url}
            >
              <div>
                <Tooltip label="Copy email to clipboard">
                  <Text
                    onClick={() =>
                      toast({
                        title: "Email copied!",
                        status: "success",
                        duration: 1500,
                        position: "top",
                        isClosable: true,
                      })
                    }
                    cursor="pointer"
                  >
                    claire@claireyau.com
                  </Text>
                </Tooltip>
              </div>
            </CopyToClipboard>
          </HStack>
        </HStack>
      </nav>
      <nav>
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          <a href="#bio" onClick={handleClick("bio")}>
            About Me
          </a>
          <a href="#skills" onClick={handleClick("skills")}>
            Skills
          </a>
          <a href="#projects" onClick={handleClick("projects")}>
            Projects
          </a>
        </HStack>
      </nav>
    </>
  );
};

export default NavItem;
