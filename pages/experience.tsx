import { Container, Center, Text, Stack } from "@chakra-ui/react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import ExperienceListItem from "components/experienceItem";
import { getJson } from "utils";

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
      <Center>
        <Text color="primary.100" fontSize="3xl" fontWeight="900" mb="8">
          My Experiences
        </Text>
      </Center>
      <Stack>
        {experiences.map((item: ExperienceItem) => (
          <ExperienceListItem key={item.id} {...item} mb="8" />
        ))}
      </Stack>
    </Container>
  );
}
