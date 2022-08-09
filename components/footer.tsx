import { Flex, HStack, Link, Text } from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <Flex
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      background="gray.700"
      justifyContent="space-between"
      alignItems="center"
      px="20"
      py="2"
    >
      <Text fontWeight="300">
        {`© ${new Date().getFullYear()} Rei Koleci — `}
        <Text display="inline-block" fontWeight="500">
          @rei.koleci
        </Text>
      </Text>
      <HStack spacing="8">
        <Link href="https://www.google.com" isExternal>
          <Icon fontSize="25" color="gray.100" as={AiFillLinkedin} />
        </Link>
        <Link href="https://www.google.com" isExternal>
          <Icon fontSize="25" color="gray.100" as={FaGithubSquare} />
        </Link>
        <Link href="https://www.google.com" isExternal>
          <Icon fontSize="25" color="gray.100" as={FaInstagramSquare} />
        </Link>
      </HStack>
    </Flex>
  );
}
