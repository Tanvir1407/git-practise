/* eslint-disable react/prop-types */
const Post = ({ post }) => {
  return (
    <div>
      {post.author}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        libero.
      </p>
    </div>
  );
};

export default Post;
