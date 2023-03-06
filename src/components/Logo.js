import { Box, Flex, Image } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Box boxSize="50px" minW="50px" justify="center" align="center">
      <Flex boxSize="100%" justify="center" align="center">
        <Image src="./favicon.ico" boxSize="40px" objectFit="cover" />
      </Flex>
    </Box>
  );
}