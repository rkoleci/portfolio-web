import { getJson } from "../utils";

export async function getStaticPaths() {
  const blogIds = await getJson("data/blog.json");
  console.log(111, blogIds);
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
}

export default function Article() {
  return <p>Article</p>;
}
