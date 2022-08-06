import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery, unescape } from "querystring";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const blogs = (await import("../../data/blog.json")).default;
  const blog = blogs.find((x) => x.id === slug);

  return {
    props: {
      title: blog?.title,
    },
  };
};

export default function Article({
  title,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <p>Article {title}</p>;
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
