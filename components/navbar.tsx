import { Flex, Box, Text, Link, Stack } from "@chakra-ui/react";
import { MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export default function () {
  return (
    <Flex
      justify="space-between"
      alignItems="center"
      as="nav"
      p="6"
      bg="gray.200"
    >
      <Box as={Flex} alignItems="center">
        <Text
          mr="4"
          fontWeight="500"
          bg="black"
          fontSize="22"
          color="white"
          pt="1"
          pb="1"
          pl="2"
          pr="2"
          borderRadius="4"
        >
          R
        </Text>
        <Text color="black" fontSize="20" fontWeight="600">
          Rei Koleci
        </Text>
      </Box>

      <Box display={["none", "none", "block"]}>
        <Stack direction="row" spacing={8} pr="8">
          <Box
            _hover={{
              cursor: "pointer",
            }}
            mr='8'
          >
            <MoonIcon color='black.100' />
          </Box>
          <NextLink href="/home" passHref>
            <Link color="primary.100" fontWeight="500">
              Home
            </Link>
          </NextLink>
          <NextLink href="/home" passHref>
            <Link color="primary.100" fontWeight="500">
              About me
            </Link>
          </NextLink>
          <NextLink href="/home" passHref>
            <Link color="primary.100" fontWeight="500">
              Blog
            </Link>
          </NextLink>
          <NextLink href="/home" passHref>
            <Link color="primary.100" fontWeight="500">
              Experience
            </Link>
          </NextLink>
          <NextLink href="/home" passHref>
            <Link color="primary.100" fontWeight="500">
              Projects
            </Link>
          </NextLink>
          <NextLink href="/home" passHref>
            <Link color="primary.100" fontWeight="500">
              Contact
            </Link>
          </NextLink>
        </Stack>
      </Box>

      <Box display={["block", "none"]} >
        <HamburgerIcon />
      </Box>
    </Flex>
  );
}
