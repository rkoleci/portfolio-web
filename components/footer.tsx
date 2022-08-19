import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      position={{
        sm: 'absolute',
        lg: 'fixed'
      }}
      bottom="0"
      left="0"
      width="100%"
      background="footer-bg"
      justifyContent="space-between"
      alignItems="center"
      px={["2", '10', '14', "20"]}
      pt="2"
      pb="3"
      display={["block", "flex"]}
    >
      <Flex
        alignItems="center"
        justifyContent={["center", "flex-start"]}
        mb={["2", "0"]}
      >
        <Text fontWeight="400" fontSize="14">
          {`© ${new Date().getFullYear()} Rei Koleci`}
        </Text>
        <Text mx="1">—</Text>
        <Text display="inline-block" fontWeight="500" color="footer-text">
          {`@rei.koleci`}
        </Text>
      </Flex>
      <HStack spacing="8" justifyContent={["center", "flex-end"]}>
        <Link href="https://www.linkedin.com/in/rei-tryreact/" target="_blank">
          <Icon fontSize="25" color="footer-icon" as={AiFillLinkedin} />
        </Link>
        <Link href="https://github.com/rkoleci" target="_blank">
          <Icon fontSize="25" color="footer-icon" as={FaGithubSquare} />
        </Link>
        <Link href="https://www.instagram.com/rei.koleci" target="_blank">
          <Icon fontSize="25" color="footer-icon" as={FaInstagramSquare} />
        </Link>
      </HStack>
    </Box>
  );
}
