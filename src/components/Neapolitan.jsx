import { Image } from "@chakra-ui/image";
import { Box, Container, Heading } from "@chakra-ui/layout";
import React from "react";
import neapolitan from "../assets/IMG_4378.JPG";

function Neapolitan() {
  return (
  <Box>
    <Container maxW="container.xl">
    <Heading>
      <Box mb='10' >Neapolitanの選手紹介</Box>
    </Heading>
    <Box w='100%'  >
    <Image w='100%' src={neapolitan} borderRadius='lg' />
    </Box>
    </Container>
  </Box>
  )
}

export default Neapolitan;
