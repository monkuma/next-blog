import Head from "next/head";
import { readFile } from "fs/promises";

export async function getStaticProps() {
  const data = await readFile("content/posts/first-post.json", "utf8");
  const post = JSON.parse(data);
  return {
    props: { post },
  };
}

function FirstPostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} | My Blog!!</title>
      </Head>
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    </>
  );
}

export default FirstPostPage;
