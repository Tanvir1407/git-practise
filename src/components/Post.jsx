/* eslint-disable react/prop-types */

const Post = ({ post }) => {
    return <>
            <div>   
                <h1>Name of this Card {post.author}</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nesciunt.</p>
            </div>
          </>;
};

export default Post;
