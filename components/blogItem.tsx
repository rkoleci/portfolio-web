import { Box, Text } from "@chakra-ui/react";

import { BlogItem } from "../pages/blog";

export default function BlogCard({ title }: BlogItem) {
  return (
    <Box>
      <Text> {title}</Text>
      {/* {...} */}
    </Box>
  );
}
