import { Container, Flex, Button, Text, Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <Container height="70vh" p="4">
      <Flex
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        <Image
          boxSize={{
            sm: "150px",
            md: "200px",
          }}
          objectFit="cover"
          src={
            "https://www.mohammadfaisal.dev/_next/image?url=%2Fstatic%2Fprofile.png&w=640&q=75"
          }
          alt="Rei Koleci"
          borderRadius="100%"
        />
        <Text color="primary.100" fontWeight="900" fontSize="48" mb="4">
          Hi, I'm Rei Koleci
        </Text>
        <Text
          color="primary.100"
          fontWeight="800"
          fontSize="30"
          className="home-text-anim home-text-anim-2"
        />
        <Text color="primary.100" fontWeight="600" fontSize="18">
          Typescript | Graphql | Rest
        </Text>
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
          rightIcon={<ArrowForwardIcon />}
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
