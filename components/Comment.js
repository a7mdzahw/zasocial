const Comment = ({ comments }) => {
  return (
    <>
      {comments &&
        comments.map((comment) => (
          <div className="card bg-dark text-light m-2" key={comment.id}>
            <h3 className="card-title card-header text-info">
              {comment.email}
            </h3>
            <div className="card-body">
              <p>{comment.body}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Comment;
