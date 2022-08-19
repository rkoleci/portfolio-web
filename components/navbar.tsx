import {
  Flex,
  Box,
  Text,
  Link,
  Stack,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const MenuLink = ({
  path,
  label,
  onClick,
}: {
  path: string;
  label: string;
  onClick: () => void;
}) => (
  <NextLink href={`/${path}`} passHref onClick={onClick}>
    <Link color="black.100" fontWeight="500">
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

const Links = ({ onClick }: { onClick: () => void }) => (
  <>
    {[
      {
        path: "/",
        label: "Home",
        onClick: onClick,
      },
      {
        path: "about",
        label: "About me",
        onClick: onClick,
      },
      {
        path: "blog",
        label: "Blog",
        onClick: onClick,
      },
      {
        path: "experience",
        label: "Experience",
        onClick: onClick,
      },
      {
        path: "projects",
        label: "Projects",
        onClick: onClick,
      },
      {
        path: "contact",
        label: "Contact",
        onClick: onClick,
      },
    ].map((item) => (
      <MenuLink key={item.path} {...item} />
    ))}
  </>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.200", "primary.100");
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", (url, { shallow }) => {
      console.log(`App is changing to ${url}`);
      setOpen(false);
    });
  }, []);
  console.log(111, "open", open);

  return (
    <Box pos="relative">
      <Flex
        justify="space-between"
        alignItems="center"
        as="nav"
        p={["5", "5", "5", "5", "8"]}
        bg={bg}
        zIndex="2000"
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
          <Text
            color="black.100"
            fontSize="20"
            fontWeight="600"
            as="a"
            href="/"
          >
            Rei Koleci
          </Text>
        </Box>

        <Box display={["none", "none", "none", "block"]}>
          <Stack direction="row" spacing={8} pr="8">
            <Box
              _hover={{
                cursor: "pointer",
              }}
              mr="8"
              onClick={toggleColorMode}
            >
              <MoonIcon color={"black.100"} />
            </Box>
            <Links onClick={() => setOpen(false)} />
          </Stack>
        </Box>

        <Box display={["block", "block", "block", "none"]}>
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
          <label htmlFor="toggle">
            <HamburgerIcon fontSize="2xl" onClick={() => setOpen(true)} />
          </label>

          <Box
            className="drop"
            id="dropdown"
            p="2"
            pb="6"
            style={{
              top: open ? "5rem" : "-350px",
              zIndex: open ? "9999" : "0",
            }}
          >
            <VStack spacing={4}>
              <Links onClick={() => setOpen(false)} />
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
