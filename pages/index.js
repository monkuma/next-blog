import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/posts";

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}

function HomaPage({ posts }) {
  console.log();
  return (
    <>
      <Head>
        <title>My Blog!!</title>
      </Head>
      <main>
        <h1>My Blog</h1>
      </main>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link href="/posts/${post.slug}">{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default HomaPage;
