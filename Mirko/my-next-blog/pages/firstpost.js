import Head from "next/head";

export async function getStaticProps() {
  console.log("[FirstPostPage] getStaticProps()");
  return {
    props: {
      // post: {
      //   title: "First Post",
      //   body: "My first post, as static props.",
      // },
      prop1: 'value1',
      prop2: 'value2',
      // message: `next is awesome`
    },
  };
}


function FirstPostPage(props) {
  console.log("[FirstPostPage] render:", props);
  // console.log("[FirstPostPage] render:", post);
  return (
    <>
      <Head>
        {/* <title>{post.title} - My Blog</title> */}
        <meta name="description" value="This is my blog" />
      </Head>
      <main>
        First Post
        {/* <h1>{post.title}</h1> */}
        {/* <p>{post.body}</p> */}
      </main>
    </>
  );
}

export default FirstPostPage;
