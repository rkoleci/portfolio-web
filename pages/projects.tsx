import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Box, Center, Grid, Text } from "@chakra-ui/react";
import ProjectItem from "../components/projectItem";
import { getJson } from "../utils";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: await getJson("data/projects.json"),
    },
  };
};

export default function Projects({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Box p="4">
      <Center>
        <Text color="black.100" fontSize="30px" fontWeight="500" mb="8">
          Projects that I've worked on
        </Text>
      </Center>
      <Grid
       
        templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)"
        }}
        width='full'
        
      >
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </Grid>
    </Box>
  );
}
