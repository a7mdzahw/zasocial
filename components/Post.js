import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div className="card m-2 w-100 bg-dark text-light">
      <div className="card-title card-header d-flex justify-content-start align-items-center">
        <div className="avatar">
          <i className="bi bi-person-circle"></i>
        </div>
        <div className="mx-3 d-flex flex-column flex-grow-1 align-items-start justify-content-start">
          <Link href={`/posts/${post.id}`}>
            <a className="text-info text-decoration-none">ZaHw</a>
          </Link>
          <p className="text-success m-0">Online</p>
        </div>
        <button className="btn btn-danger">
          <i className="bi bi-trash-fill"></i>
        </button>
      </div>
      <div className="card-body">
        <p className="text-truncate" style={{ maxHeight: 300 }}>
          {post.body}
        </p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-warning">
            <i className="bi bi-star"></i>
          </button>
          <button className="btn btn-info">
            <i className="bi bi-reply"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
