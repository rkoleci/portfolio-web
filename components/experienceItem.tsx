import { Box, Text } from "@chakra-ui/react";

import { ExperienceItem } from "../pages/experience";

export default function ExperienceListItem({title}: ExperienceItem) {
    return (
        <Box>
            <Text>{title}</Text>
        </Box>
    )
}