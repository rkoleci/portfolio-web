import { Box, HStack, Text, Tag } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function ProjectItem({
  title,
  onItemClick,
}: {
  title: string;
  onItemClick: () => void;
}) {
  return (
    <Box flex="1" bg="white.100" p="8" onClick={onItemClick}>
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
        <Text color="white.100" mr="4">
          IC
        </Text>
        <Text color="white.100">title</Text>
      </Box>
      <Box p="6" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;">
        <Text color="black.300" fontSize="18" fontWeight="700" mb="4">
          {title}
        </Text>
        <Text color="primary.100" fontSize="20" fontWeight="500" mb="2">
          Contributions
        </Text>

        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          mb="1"
        >
          <CheckIcon color="gray.100" mr="2" fontSize="14px" />
          <Text color="black.200" fontSize="16">
            Designing and building new components
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          mb="1"
        >
          <CheckIcon color="gray.100" mr="2" fontSize="14px" />
          <Text color="black.200" fontSize="16">
            Designing and building new components
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          mb="4"
        >
          <CheckIcon color="gray.100" mr="2" fontSize="14px" />
          <Text color="black.200" fontSize="16">
            Designing and building new components
          </Text>
        </Box>

        <Text color="primary.100" fontSize="20" fontWeight="500" mb="2">
          Skills
        </Text>

        <HStack>
          <Tag
            size="lg"
            variant="solid"
            bg="blue.300"
            color="white.100"
            borderRadius="16px"
          >
            Teal
          </Tag>
          <Tag
            size="lg"
            variant="solid"
            bg="blue.300"
            color="white.100"
            borderRadius="16px"
          >
            Teal
          </Tag>
        </HStack>
      </Box>
    </Box>
  );
}
