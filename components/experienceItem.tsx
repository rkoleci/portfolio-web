import { Box, Text, Flex, Wrap, Stack, Tag, Link } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import { ExperienceItem } from "pages/experience";
import { colorScheme, ColorSchemeKey } from "components/projectItem";

export default function ExperienceListItem({
  title,
  company,
  companyURL,
  roles,
  skills,
  accomplishments,
  time: { start, end },
  ...rest
}: ExperienceItem) {
  const dateFormat = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  return (
    <Box
      borderLeftWidth="2px"
      borderColor="gray.300"
      borderStyle="solid"
      pl="8"
      position="relative"
      {...rest}
    >
      <Box
        width="4"
        height="4"
        bg="gray.100"
        borderRadius="100%"
        pos="absolute"
        top="-2"
        left="-2"
      />
      <Text color="primary.100" fontSize="24" fontWeight="900" mb="2">
        {title}
      </Text>
      <Text color="primary.100" fontSize="18" fontWeight="500" mb="3">
        {`${company} - `} 
        <Link
          target="_blank"
          color="blue.600"
          fontWeight="800"
          fontSize="16"
          href={companyURL}
          textDecor="underline"
        >
          {companyURL}
        </Link>
      </Text>
      <Text color="gray.600" fontSize="14" fontWeight="600" ms="1" mb="3">
        {`${dateFormat(start)} - ${end ? dateFormat(end) : 'Present'}`}
      </Text>

      <Text color="primary.100" fontSize="20" fontWeight="600" mb="2">
        Roles
      </Text>
      <Stack mb="4">
        {skills.map((item: string) => (
          <Flex key={item} alignItems="center">
            <CheckIcon color="gray.100" mr="2" fontSize="12px" />
            <Text color="black.200" fontSize="16">
              Member of DASH team that is responsible for monitoring the entire
              driverless fleet
            </Text>
          </Flex>
        ))}
      </Stack>

      <Text color="primary.100" fontSize="20" fontWeight="600" mb="2">
        Accomplishments
      </Text>
      <Stack mb="4">
        {accomplishments.map((item: string) => (
          <Flex key={item} alignItems="center">
            <CheckIcon color="gray.100" mr="2" fontSize="12px" />
            <Text color="black.200" fontSize="16">
              {item}
            </Text>
          </Flex>
        ))}
      </Stack>

      <Text color="primary.100" fontSize="20" fontWeight="600" mb="2">
        Skills
      </Text>
      <Wrap mb="4">
        {skills.map((item: string) => (
          <Tag
            key={item}
            size="lg"
            fontSize="12"
            variant="solid"
            borderRadius="16px"
            colorScheme={colorScheme[item as ColorSchemeKey]}
            opacity="0.5"
          >
            {item}
          </Tag>
        ))}
      </Wrap>
    </Box>
  );
}
