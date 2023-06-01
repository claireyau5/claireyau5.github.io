import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const toast = useToast();

  const isMobile = useBreakpointValue({ base: true, md: false });

  const Items = [
    {
      name: "About Me",
      sid: "#bio",
    },
    {
      name: "Experience",
      sid: "#experience",
    },
    {
      name: "Research",
      sid: "#research",
    },
    {
      name: "Certifications",
      sid: "#certificate",
    },
  ];

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
                      {Items.map((Item) => (
                        <a href={Item.sid}>{Item.name}</a>
                      ))}
                    </VStack>
                  </Box>
                </HStack>
              </Box>
            </Collapse>
          </nav>
        </HStack>
      </nav>
      <nav>
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          {Items.map((Item) => (
            <a href={Item.sid}>{Item.name}</a>
          ))}
        </HStack>
      </nav>
    </>
  );
};

export default Navbar;
