import {
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FullContainer } from "../Containers";
import SectionHeader from "../SectionHeader";

export default function Process() {
  const Steps = () => {
    return (
      <VStack spacing={16}>
        <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          spacing={8}
        >
          <Box boxSize={{ base: "200px", md: "250px" }} display="flex">
            <Image
              boxSize="100%"
              src="./static/images/features/temp.png"
              alt="test"
              objectFit="cover"
            />
          </Box>
          <VStack w={{ base: "100%", md: "50%" }} justify="center" align="left">
            <Heading textAlign={{ base: "center", md: "left" }}>
              Sed ut perspiciatis unde omnis
            </Heading>
            <Text textAlign={{ base: "center", md: "left" }}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </Text>
          </VStack>
        </Stack>
      </VStack>
    );
  };
  const ProcessContainer = ({ children }) => {
    return (
      <FullContainer
        as="section"
        borderY="1px"
        borderColor="altGray.lighter"
        bg="altGray.dark"
      >
        {children}
      </FullContainer>
    );
  };

  return (
    <ProcessContainer>
      <SectionHeader
        title="Sed ut perspiciatis unde omnis"
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti."
      />
      <Steps />
    </ProcessContainer>
  );
}
