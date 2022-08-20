import { Container, Flex, Button, Text, Image, Box } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <Container height="90vh" p="8" px="4">
      <Flex
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        <Image
          boxSize={"200px"}
          objectFit="cover"
          src={
            "https://www.mohammadfaisal.dev/_next/image?url=%2Fstatic%2Fprofile.png&w=640&q=75"
          }
          alt="Rei Koleci"
          borderRadius="100%"
        />
        <Text
          color="green.300"
          fontWeight="900"
          fontSize={['30', '48']}
          mb={["0", "4"]}
          textAlign="center"
        >
          {`Hi, I'm Rei Koleci`}
        </Text>
        <Box textAlign="center">
          <Text
            color="primary.100"
            fontWeight="800"
            fontSize={{
              md: "20",
              xl: "30",
            }}
            className="home-text-anim home-text-anim-2"
          />
          <Text
            color="primary.100"
            fontWeight="600"
            fontSize={{
              sm: "14",
              md: "18",
              xl: "24",
            }}
          >
            Typescript | Graphql | Rest
          </Text>
        </Box>
        <Button
          px="5rem"
          py="6"
          bg="transparent"
          width="fit-content"
          alignSelf="center"
          borderRadius="8"
          borderWidth="2px"
          borderStyle="solid"
          borderColor="primary.100"
          rightIcon={<ArrowForwardIcon color='primary.100'  />}
          as="a"
          href="/about"
          mb="8"
        >
          Know more about me
        </Button>
      </Flex>
    </Container>
  );
}
