import { Grid, Text, Link, Image, HStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";

export default function AboutMeCard() {
  return (
    <Grid
      maxWidth="300px"
      display="grid"
      gridTemplateColumns="1fr"
      justifyItems="center"
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
        mb="6"
      />
      <Text
        color="black.300"
        fontWeight="800"
        fontSize="30"
        mb="4"
        textAlign="center"
      >
        Who I am
      </Text>
      <Text
        color="gray.100"
        fontSize="16"
        fontWeight="500"
        mb="4"
        textAlign="center"
        lineHeight="1.3"
        overflowWrap="break-word"
      >
        Hi, I am{" "}
        <Text as="span" color="black.400" fontWeight="800" fontSize="16">
          Rei Koleci
        </Text>
        , A front-end software engineer{" "}
        <Text as="a" color="blue.600" fontWeight="800" fontSize="16" href='https://cyabra.com/' target='_blank'>
          {" "}
          @Cyabra
        </Text>
        , working remotely from a small but beautiful country named Albania.
      </Text>
      <Text
        color="gray.100"
        fontSize="16"
        fontWeight="400"
        mb="10"
        textAlign="center"
        lineHeight="1.3"
        overflowWrap="break-word"
      >
        I am most experienced <br />
        in
        <Text as="span" color="blue.300" fontWeight="700" fontSize="16">
          {" "}
          ReactJs
        </Text>
        ,{" "}
        <Text as="span" color="green.200" fontWeight="700" fontSize="16">
          {" "}
          Nextjs
        </Text>{" "}
        and
        <Text as="span" color="orange.300" fontWeight="700" fontSize="16">
          {" "}
          React Native
        </Text>{" "}
        .
      </Text>
      <Image src={"/buy_coffe.webp"}  boxSize={'70%'} mb="4"  objectFit="cover" alt='buy me a coffee'/>
      <HStack spacing="8">
        <Link href="https://www.linkedin.com/in/rei-tryreact/" target="_blank">
          <Icon fontSize="25" color="primary.100" as={AiFillLinkedin} />
        </Link>
        <Link href="https://github.com/rkoleci" target="_blank">
          <Icon fontSize="25" color="primary.100" as={FaGithubSquare} />
        </Link>
        <Link href="https://www.instagram.com/rei.koleci" target="_blank">
          <Icon fontSize="25" color="primary.100" as={FaInstagramSquare} />
        </Link>
      </HStack>
    </Grid>
  );
}
