import { Box, HStack, Text, Tag, Flex, Link } from "@chakra-ui/react";
import { CalendarIcon, CheckIcon, LinkIcon } from "@chakra-ui/icons";
import { ProjectItem } from "../pages/projects";
import NextLink from "next/link";
interface ProjectItemProps extends ProjectItem {
  onItemClick: () => void;
}

const colorScheme = {
  Reactjs: "blue",
  Typescript: "teal",
  Nextjs: "yellow",
  remix: "red",
  ChakraUI: "gray",
};

type ColorSchemeKey = keyof typeof colorScheme;

export default function ProjectListItem({
  title,
  company,
  contributions,
  skills,
  link,
  onItemClick,
}: ProjectItemProps) {
  return (
    <Box flex="1" bg="white.100" p="6" onClick={onItemClick}>
      <Box
        bg="primary.100"
        borderTopLeftRadius="8"
        borderTopRightRadius="8"
        justifyContent="flex-start"
        display="flex"
        alignItems="center"
        pt="3"
        pb="3"
        ps="4"
      >
        <CalendarIcon color="white.100" mr="2" fontSize="20" />
        <Text color="white.100" fontSize="18" fontWeight="700">
          {company}
        </Text>
      </Box>
      <Box p="6" pt="4" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;">
        <Text color="black.300" fontSize="18" fontWeight="900" mb="4">
          {title}
        </Text>
        <Text color="primary.100" fontSize="20" fontWeight="600" mb="2">
          Contributions
        </Text>

        {contributions.map((item: string, index: number) => (
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            mb={index == contributions.length - 1 ? "4" : "1"}
          >
            <CheckIcon color="gray.100" mr="2" fontSize="12px" />
            <Text color="black.200" fontSize="16">
              {item}
            </Text>
          </Box>
        ))}

        <Text color="primary.100" fontSize="20" fontWeight="600" mb="2">
          Skills
        </Text>

        <HStack mb="4">
          {skills.map((item: string) => (
            <Tag
              size="md"
              fontSize='12'
              variant="solid"
              borderRadius="16px"
              colorScheme={colorScheme[item as ColorSchemeKey]}
              opacity="0.5"
            >
              {item}
            </Tag>
          ))}
        </HStack>

        {link ? (
          <Flex alignItems="center" _hover={{ cursor: "pointer" }}>
            <LinkIcon fontSize="14" color="black.300" />
            <Link
              isExternal
              ml="4"
              color="blue.600"
              textDecoration="underline"
              textDecorationColor="blue.600"
              href={link}
            >
              Demo
            </Link>
          </Flex>
        ) : (
          <Flex alignItems="center">
            <LinkIcon fontSize="14" color="black.300" />
            <Text color="black.200" fontSize="18" fontWeight="500" ml="4">
              {link || "Not available"}
            </Text>
          </Flex>
        )}
      </Box>
    </Box>
  );
}
