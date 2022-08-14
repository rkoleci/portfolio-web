import {
  Grid,
  GridItem,
  Box,
  Text,
  Link,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { Icon } from "@chakra-ui/react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";

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
      gridTemplateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]}
      px={["2", "2", "10%"]}
      py='4'
      mb='100px'
      gap={{
          sm: '8',
          md: '0'
      }}
    >
      <GridItem
        boxShadow="md"
        rounded="md"
        bg="white.100"
        justifySelf="stretch"  
        px="5"
        pt="10"
        pb="2"
        maxW={['1fr', '1fr', '1fr', '60%']}
        display='grid'
        placeItems='center'
      >
        <Image
          boxSize={{
            sm: "150px",
            md: "200px",
          }}
          objectFit="cover"
          src={
            "https://www.mohammadfaisal.dev/_next/image?url=%2Fstatic%2Fprofile.png&w=640&q=75"
          }
          alt="Rei Koleci"
          borderRadius="100%"
          mb="6"
        />
        <Text
          color="black.300"
          fontWeight="800"
          fontSize="30"
          mb="4"
          textAlign="center"
        >
          Who I am
        </Text>
        <Text color="gray.100" fontSize="16" fontWeight="400" mb='4' textAlign='center'>
          Hi, I amMohammad Faisal, A full-stack software engineer{" "}
          <Text as="span" color="blue.600" fontWeight="700" fontSize="16">
            {" "}
            @Cruise
          </Text>{" "}
          , working remotely from a small but beautiful country named
          Bangladesh.
        </Text>
        <Text color="gray.100" fontSize="16" fontWeight="400"  mb='10' textAlign='center'>
          I am most experienced <br />
          in
          <Text as="span" color="blue.600" fontWeight="700" fontSize="16">
            {" "}
            ReactJs
          </Text>{" "}
          <Text as="span" color="blue.600" fontWeight="700" fontSize="16">
            {" "}
            Nextjs
          </Text>{" "}
          <Text as="span" color="blue.600" fontWeight="700" fontSize="16">
            {" "}
            React Native
          </Text>{" "}
          .
        </Text>
        <Image src={"/buy_coffe.webp"} width="70%"   mb='4'/>
        <HStack spacing="8" >
          <Link
            href="https://www.linkedin.com/in/rei-tryreact/"
            target="_blank"
          >
            <Icon fontSize="25" color="primary.100" as={AiFillLinkedin} />
          </Link>
          <Link href="https://github.com/rkoleci" target="_blank">
            <Icon fontSize="25" color="primary.100" as={FaGithubSquare} />
          </Link>
          <Link href="https://www.instagram.com/rei.koleci" target="_blank">
            <Icon fontSize="25" color="primary.100" as={FaInstagramSquare} />
          </Link>
        </HStack>
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
            <Text color="black.200" fontSize="24" fontWeight="700" mb='4'>
              I am a full-stack software engineer
            </Text>
            <Text color="gray.600" fontSize="16" fontWeight="600" lineHeight='1.6'>
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
