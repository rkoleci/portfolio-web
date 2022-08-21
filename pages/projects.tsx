import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ReactNode } from "react";
import { Box, Center, Text } from "@chakra-ui/react";

import GridList from "../components/grid";
import ProjectItem from "../components/projectItem";
import { getJson } from "../utils";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: await getJson("data/projects.json")
    },
  };
};

export type ProjectItem = InferGetStaticPropsType<typeof getStaticProps>[0];

export default function Projects({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Item = (props: ProjectItem): JSX.Element => {
    return <ProjectItem {...props} />;
  };

  const onItemClick = (item: ProjectItem) => {
    
  }

  return (
    <Box p="4">
      <Center>
        <Text color="black.100" fontSize="30px" fontWeight="500" mb="8">
          {`Project that I've worked on`}
        </Text>
      </Center>
      <GridList data={projects as Array<ProjectItem>} renderItem={Item} onItemClick={onItemClick} />
    </Box>
  );
}
