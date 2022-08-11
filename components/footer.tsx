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
      pt="2"
      pb="3"
    >
      <Flex alignItems="center">
        <Text fontWeight="400" fontSize="14">
          {`© ${new Date().getFullYear()} Rei Koleci`}
        </Text>
        <Text mx="1">—</Text>
        <Text display="inline-block" fontWeight="500" color="gray.600">
          {`@rei.koleci`}
        </Text>
      </Flex>
      <HStack spacing="8">
        <Link href="https://www.linkedin.com/in/rei-tryreact/" target="_blank">
          <Icon fontSize="25" color="gray.100" as={AiFillLinkedin} />
        </Link>
        <Link href="https://github.com/rkoleci" target="_blank">
          <Icon fontSize="25" color="gray.100" as={FaGithubSquare} />
        </Link>
        <Link href="https://www.instagram.com/rei.koleci" target="_blank">
          <Icon fontSize="25" color="gray.100" as={FaInstagramSquare} />
        </Link>
      </HStack>
    </Flex>
  );
}
