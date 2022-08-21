import { Grid, GridItem, Box, Text } from "@chakra-ui/react";
import React from "react";

import AboutMeCard from "components/aboutMeCard";
import Head from "next/head";

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
    <>
      <Head>
        <title>My Story | Rei Koleci</title>
      </Head>
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
        gap={"8"}
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
                I am a front-end software engineer
              </Text>
              <Text
                color="gray.600"
                fontSize="16"
                fontWeight="600"
                lineHeight="1.6"
              >
                {` I love to write code. I love turning UI into code. This is the most
              important thing that I do. Currently I am working remotely `}
                <Text
                  as="a"
                  color="blue.600"
                  fontWeight="700"
                  fontSize="16"
                  textDecor="underline"
                  href="https://cyabra.com/"
                  target="_blank"
                >
                  @Cyabra
                </Text>
                {`.`}
              </Text>
            </>
          </Card>
          <Card>
            <>
              <Text color="black.200" fontSize="24" fontWeight="700">
                I am a vetted Freelancer
              </Text>
              <Text
                color="gray.600"
                fontSize="16"
                fontWeight="600"
                lineHeight="1.6"
              >
                {` I am enlisted in Upwork as a freelancer and have completed a couple of significant projects `}
                <Text
                  as="a"
                  color="orange.400"
                  fontWeight="600"
                  fontSize="16"
                  textDecor="underline"
                  href="https://www.upwork.com/freelancers/~0196fde06791a677d2"
                  target="_blank"
                >
                  @Upwork
                </Text>
                .
              </Text>
            </>
          </Card>
          <Card>
            <>
              <Text color="black.200" fontSize="24" fontWeight="700">
                I am a web teaching instructor
              </Text>
              <Text
                color="gray.600"
                fontSize="16"
                fontWeight="600"
                lineHeight="1.6"
              >
                {` I love to share the knowledge. Therefore I teach juniors at a local training center in my city `}
                <Text
                  as="a"
                  color="blue.600"
                  fontWeight="600"
                  fontSize="16"
                  textDecor="underline"
                  href="https://tct.edu.al"
                  target="_blank"
                >
                  @TCT
                </Text>
                .
              </Text>
            </>
          </Card>
        </GridItem>
      </Grid>
    </>
  );
}
