import { Grid, GridItem, Box, Text } from "@chakra-ui/react";
import React from "react";

import AboutMeCard from "components/aboutMeCard";

function Card({ children }: { children: React.ReactElement }) {
  return (
    <Box
      boxShadow="md"
      rounded="md"
      bg="white.100"
      px="8"
      pt="10"
      pb="5"
      mb="4"
    >
      {children}
    </Box>
  );
}

export default function About() {
  return (
    <Grid
      gridTemplateColumns={{
        sm: "1fr",
        md: "1fr",
        lg: "0.5fr 1fr",
        xl: "1fr 1fr",
        "2xl": "1fr 2fr",
      }}
      px={["2", "2", "10%"]}
      py="4"
      mb="100px"
      gap={'8'}
    >
      <GridItem
        boxShadow="md"
        rounded="md"
        bg="white.100"
        justifySelf={["center", "center", "center", "flex-start"]}
        px="5"
        pt="10"
        pb="2"
        maxW={{
          sm: "1fr",
          md: "1fr",
          lg: "1fr",
          xl: "1fr",
          "2xl": "80%",
        }}
        display="grid"
        placeItems="center"
      >
        <AboutMeCard />
      </GridItem>
      <GridItem>
        <Text
          color="primary.100"
          fontWeight="900"
          fontSize="30"
          mb="4"
          textAlign="center"
        >
          What do I do
        </Text>
        <Card>
          <>
            <Text color="black.200" fontSize="24" fontWeight="700" mb="4">
              I am a full-stack software engineer
            </Text>
            <Text
              color="gray.600"
              fontSize="16"
              fontWeight="600"
              lineHeight="1.6"
            >
              {` I love to write code. I love to design systems. This is the most
              important thing that I do. Currently I am working remotely `}
              <Text
                as="span"
                color="blue.600"
                fontWeight="700"
                fontSize="16"
                textDecor="underline"
              >
                @Cyabra
              </Text>
              {` .`}
            </Text>
          </>
        </Card>
        <Card>
          <>
            <Text color="black.200" fontSize="24" fontWeight="700">
              I am a vetted Freelancer
            </Text>
            <Text color="gray.600" fontSize="16" fontWeight="300">
              {` I love to write code. I love to design systems. This is the most
              important thing that I do. Currently I am working remotely `}
              <Text
                as="span"
                color="blue.600"
                fontWeight="600"
                fontSize="16"
                textDecor="underline"
              >
                @Cyabra
              </Text>
              {` .`}
            </Text>
          </>
        </Card>
        <Card>
          <>
            <Text color="black.200" fontSize="24" fontWeight="700">
              I am a full-stack software engineer
            </Text>
            <Text color="gray.600" fontSize="16" fontWeight="300">
              {` I love to write code. I love to design systems. This is the most
              important thing that I do. Currently I am working remotely `}
              <Text
                as="span"
                color="blue.600"
                fontWeight="600"
                fontSize="16"
                textDecor="underline"
              >
                @Cyabra
              </Text>
              {` .`}
            </Text>
          </>
        </Card>
      </GridItem>
    </Grid>
  );
}
