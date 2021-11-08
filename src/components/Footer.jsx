import { Box, Container, Divider, Flex, Heading } from "@chakra-ui/layout";
import React from "react";

function Footer() {
  return (
    <Box mt={10} color="#ffffff" background="#212121" py="10">
      <Container maxW="container.xl">
        <Flex alignItems="center">
          <Heading size="md" >NAPOLIの紹介</Heading>
        </Flex>
        <Divider my='10' />
      </Container>
    </Box>
  );
}

export default Footer;
