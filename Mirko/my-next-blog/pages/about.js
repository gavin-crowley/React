import Head from "next/head";

export async function getStaticProps() {
  return {
      props: {
          prop1: 'value1',
          prop2: 'value2',
      }
  }
}

function AboutPage(props) {
  console.log("[AboutPage] render", props);
  return (
    <>
      <Head>
        <title>About - My Blog</title>
        <meta name="description" value="This is my blog" />
      </Head>
      <main>
        <h1>About</h1>
      </main>
    </>
  );
}

export default AboutPage;
