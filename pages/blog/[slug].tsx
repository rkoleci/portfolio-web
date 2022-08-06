import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = (context) => {
  const { slug } = context.params as IParams;

  return {
    props: {
      id: slug,
    },
  };
};

export default function Article() {
  return <p>Article</p>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = (await import("../../data/blog.json")).default;
  const slugs = blogs.map((blog) => blog.id);
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
