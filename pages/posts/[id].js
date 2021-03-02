import Head from "next/head";
import axios from "axios";
import Comment from "../../components/Comment";

const Post_Comments = ({ comments }) => {
  return (
    <>
      <Head>
        <title>{`Post ${comments[0].postId}`}</title>
      </Head>
      <h2 className="display-4 text-info m-2">
        <i className="bi bi-reply-all"></i> Comments for Post #
        {comments[0].postId}
      </h2>
      <Comment comments={comments} />
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const id = ctx.params.id;
  const { data: comments } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );

  return { props: { comments } };
};

export default Post_Comments;
