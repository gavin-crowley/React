import Head from 'next/head'
import Link from 'next/link';

export async function getStaticProps() {
  return {
      props: {
          prop1: 'value1',
          prop2: 'value2',
      }
  }
}

export default function HomePage(props) {
  console.log("[HomePage] render", props);
  return (
    <>
    <Head>
      <title>My Blog</title>
      <meta name="description" value="This is my blog" />
    </Head>
      <main>
        <h1>Mirko Blog</h1>
          <ul>
            <li>
              <Link href="/posts/first-post">
                <a>First Post</a>
              </Link>
            </li>
          </ul>
      </main>
    </>
  );
}


