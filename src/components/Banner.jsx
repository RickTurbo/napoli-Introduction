import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Container, Flex, Grid, Heading } from "@chakra-ui/layout";
import React from "react";

import napoliLogo from "../assets/napoli-logo.jpeg";
import napoliMembers from "../assets/napoli-members.JPG";
import Lozano from "../assets/Lozano.JPG";
import Insigne from "../assets/Insigne.PNG";
import Petagna from "../assets/Petagna.JPG";
import Osimhen from "../assets/Osimhen.JPG";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";

function Banner() {
  return (
    <>
      <header>
        <Flex alignItems="center" justifyContent="space-between" ml={6} mr={6}>
          <Box zIndex="2">
            <Image boxSize="90px" src={napoliLogo} alt="brand" />
          </Box>
          <Box>
            <Button pr={3} colorScheme="gray.600" fontSize="lg" variant="link">
              Log in
            </Button>
            <Button colorScheme="gray.600" fontSize="lg" variant="link">
              Sign up
            </Button>
          </Box>
        </Flex>
      </header>

      <Box>
        <Container maxW="container.xl">
          <Flex
            alignItems="center"
            py="20"
            flexDirection={{
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
              base: "column",
            }}
          >
            <Box>
              <Heading>
                <Box>
                  イタリアのサッカーチーム　SSC　NAPOLIについて紹介します
                </Box>
              </Heading>
              <Box mt="6" fontWeight="medium"　mb='6'>
                SSC　NAPOLIの選手たちを紹介します
              </Box>
            </Box>

            <Box w="100%">
              <Image
                w="100%"
                src={napoliMembers}
                alt="members"
                borderRadius="lg"
              />
            </Box>
          </Flex>

          <Heading>
            <Box>ナポリの選手紹介</Box>
          </Heading>
        </Container>
      </Box>

      <Container maxW="container.xl" mt={10}>
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(4,1fr)",
            xl: "repeat(4,1fr)",
            base: "repeat(1,1fr)",
          }}
          gap={6}
        >
          <Box>
            <Image w="100%" src={Lozano} borderRadius="lg" />
            <Accordion allowToggle mt={5}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" color="teal">
                      Hirving Lozano
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          <Box
            mt={{
              sm: "10",
              md: "0",
              lg: "0",
              xl: "0",
              base: "10",
            }}
          >
            <Image w="100%" src={Insigne} borderRadius="lg" />
            <Accordion allowToggle mt={5}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" color="teal">
                      Lorenzo Insigne
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          <Box
            mt={{
              sm: "10",
              md: "0",
              lg: "0",
              xl: "0",
              base: "10",
            }}
          >
            <Image w="100%" src={Petagna} borderRadius="lg" />
            <Accordion allowToggle mt={5}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" color="teal">
                      Andrea Petagna
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          <Box
            mt={{
              sm: "10",
              md: "0",
              lg: "0",
              xl: "0",
              base: "10",
            }}
          >
            <Image w="100%" src={Osimhen} borderRadius="lg" />
            <Accordion allowToggle mt={5}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" color="teal">
                      Victor Osimhen
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default Banner;
