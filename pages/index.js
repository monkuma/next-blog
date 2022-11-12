import Head from "next/head";
import Link from "next/link";

function HomaPage() {
  return (
    <>
      <Head>
        <title>My Blog!!</title>
      </Head>
      <main>
        <h1>My Blog</h1>
      </main>
      <ul>
        <li>
          {" "}
          <Link href="/posts/first-post">FirstPostPage</Link>
        </li>
        <li>two</li>
        <li>three</li>
      </ul>
    </>
  );
}
export default HomaPage;
