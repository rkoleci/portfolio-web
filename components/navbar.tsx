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
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const MenuLink = ({ path, label }: { path: string; label: string }) => (
  <NextLink href={`/${path}`} passHref>
    <Link color="primary.100" fontWeight="500">
      <Text
        _hover={{
          textDecor: "underline",
        }}
        borderBottomWidth={["1px", "1px", "0"]}
        borderBottomColor="primary.100"
      >
        {label}
      </Text>
    </Link>
  </NextLink>
);

const Links = () => (
  <>
    {[
      {
        path: "home",
        label: "Home",
      },
      {
        path: "about",
        label: "About me",
      },
      {
        path: "blog",
        label: "Blog",
      },
      {
        path: "experience",
        label: "Experience",
      },
      {
        path: "projects",
        label: "Projects",
      },
      {
        path: "contact",
        label: "Contact",
      },
    ].map((item) => (
      <MenuLink {...item} />
    ))}
  </>
);

export default function () {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.200", "primary.100");

  return (
    <Box pos="relative">
      <Flex
        justify="space-between"
        alignItems="center"
        as="nav"
        p="6"
        bg={bg}
        zIndex="2000"
        maxH="5rem"
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
            as="a"
            href="/"
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
              onClick={toggleColorMode}
            >
              <MoonIcon
                color={colorMode === "light" ? "black.100" : "white.100"}
              />
            </Box>
            <Links />
          </Stack>
        </Box>

        <Box display={["block", "block", "none"]}>
          <Box
            _hover={{
              cursor: "pointer",
            }}
            display="inline-block"
            mr="4"
            onClick={toggleColorMode}
          >
            <MoonIcon
              color={colorMode === "light" ? "black.100" : "white.100"}
            />
          </Box>
          <input type="checkbox" name="toggle" id="toggle" />
          <label for="toggle">
            <HamburgerIcon fontSize="2xl" />
          </label>

          <Box className="drop" id="dropdown" p="2" pb="6">
            <VStack spacing={4}>
              <Links />
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
