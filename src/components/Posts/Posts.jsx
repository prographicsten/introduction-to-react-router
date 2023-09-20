import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts);

    return (
        <div>
            <h2>Posts: {posts.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    posts.map((post, idx) => <Post key={idx} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;