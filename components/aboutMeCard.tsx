import { Text, Link, Image, HStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";

export default function AboutMeCard() {
  return (
    <>
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
        fontWeight="400"
        mb="4"
        textAlign="center"
      >
        Hi, I amMohammad Faisal, A full-stack software engineer{" "}
        <Text as="span" color="blue.600" fontWeight="700" fontSize="16">
          {" "}
          @Cruise
        </Text>{" "}
        , working remotely from a small but beautiful country named Bangladesh.
      </Text>
      <Text
        color="gray.100"
        fontSize="16"
        fontWeight="400"
        mb="10"
        textAlign="center"
      >
        I am most experienced <br />
        in
        <Text as="span" color="blue.600" fontWeight="700" fontSize="16">
          {" "}
          ReactJs
        </Text>{" "}
        <Text as="span" color="blue.600" fontWeight="700" fontSize="16">
          {" "}
          Nextjs
        </Text>{" "}
        <Text as="span" color="blue.600" fontWeight="700" fontSize="16">
          {" "}
          React Native
        </Text>{" "}
        .
      </Text>
      <Image src={"/buy_coffe.webp"} width="70%" mb="4" />
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
    </>
  );
}
