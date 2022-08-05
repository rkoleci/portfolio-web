import { Box } from "@chakra-ui/react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import GridList from "../components/grid";
import BlogCard from "../components/blogItem";
import { getJson } from "../utils";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      blog: await getJson("data/blog.json"),
    },
  };
};

export type BlogItem = InferGetStaticPropsType<typeof getStaticProps>[0];

export default function Blog({
  blog,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Item = (item: BlogItem): JSX.Element => {
    return <BlogCard {...item} />;
  };

  const onItemClick = () => {};

  return (
    <Box p="4">
      <GridList data={blog} renderItem={Item} onItemClick={onItemClick} />
    </Box>
  );
}
