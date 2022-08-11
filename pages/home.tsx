import { Flex, Button, Text, Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      justifyContent="space-between"
      alignItems="center"
      p="3rem"
    >
      <Image
        boxSize={{
          sm: "150px",
          md: "200px",
        }}
        objectFit="cover"
        src={'https://www.mohammadfaisal.dev/_next/image?url=%2Fstatic%2Fprofile.png&w=640&q=75'}
        alt="Rei Koleci"
        borderRadius="100%"
      /> 
      <Text color="primary.100" fontWeight="900" fontSize="48">
        Hi, I'm Rei Koleci
      </Text>
      <Text color="primary.100" fontWeight="800" fontSize="30">
        Software Engineer
      </Text>
      <Text color="primary.100" fontWeight="600" fontSize="18">
        ReactJS | NodeJS | AWS
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
      >
        Know more about me
      </Button>
    </Flex>
  );
}
