import {
  Flex,
  Box,
  Text,
  Link,
  Stack,
  Container,
  Input,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const Links = () => (
  <>
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
  </>
);

export default function () {
  return (
    <Box pos="relative">
      <Flex
        justify="space-between"
        alignItems="center"
        as="nav"
        p="6"
        bg="gray.200"
        zIndex="2000"
        maxH='5rem'
      >
        <Box as={Flex} alignItems="center">
          <Text
            mr="4"
            fontWeight="500"
            bg="black"
            fontSize="22"
            color="white"
            pt="0"
            pb="0"
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
              mr="8"
            >
              <MoonIcon color="black.100" />
            </Box>
            <Links />
          </Stack>
        </Box>

        <Box display={["block", "none"]}>
          <input type="checkbox" name="toggle" id="toggle" />
          <label for="toggle"></label>
          <Box className="drop" id="dropdown">
           <VStack>
           <Links />
           </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
