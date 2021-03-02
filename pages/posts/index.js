import Head from "next/head";
import axios from "axios";

import Post from "../../components/Post";

const posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <div>
        <h2 className="m-2">
          <i className="bi bi-signpost"></i> All Posts
        </h2>
        <div className="row">
          {posts.map((post) => (
            <div className="col-lg-4 col-md-6">
              <Post post={post} key={post.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async (ctx) => {
  const { data: posts } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return { props: { posts } };
};

export default posts;
