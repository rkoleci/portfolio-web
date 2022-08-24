import { Container, Flex, Text, VStack, Link, Tooltip } from "@chakra-ui/react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { DownloadIcon } from "@chakra-ui/icons";

import ExperienceListItem from "components/experienceItem";
import { getJson } from "utils";
import { useEffect } from "react";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      experiences: await getJson("data/experiences.json"),
    },
  };
};

export type ExperienceItem = InferGetStaticPropsType<typeof getStaticProps>[0];

export default function Experience({
  experiences,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container p="4">
      <Head>
        <title>Experience | Rei Koleci</title>
      </Head>
      <Flex justifyContent="center" alignItems="center">
        <Text color="primary.100" fontSize="3xl" fontWeight="900" mb="8">
          My Experiences
        </Text>
        <Tooltip label="Download CV" bg="gray.300" color="black">
          <Link
            color="gray.600"
            mb="30px"
            ml="2"
            opacity="0.6"
            fontSize="xl"
            href={"/cv-ReiKoleci.pdf"}
            download
          >
            <DownloadIcon />
          </Link>
        </Tooltip>
      </Flex>
      <VStack spacing='12' align='stretch'>
        {experiences.map((item: ExperienceItem) => (
          <ExperienceListItem key={item.id} {...item}   />
        ))}
      </VStack>
    </Container>
  );
}
