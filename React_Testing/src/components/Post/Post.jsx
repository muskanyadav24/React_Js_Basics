import "./Post.css";
import profile from "../../assets/images/pic.jpg";
import postImage from "../../assets/images/post-image.jpg";
import { useState } from "react";

const Post = () => {

    const [post, setPost] = useState("");
    const [comments, setComments] = useState([]);

    const handleComment = (e) => {
        e.preventDefault();
        setComments([...comments, post]);
        setPost("");
    }

    return (
        <>
            <form onSubmit={handleComment}>
                <div className="postCard">
                    <div className="card-header">
                        <div className="postCard-header">
                            <img src={profile} alt="" />
                        </div>
                        <div className="title">
                            <p>miku_24</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="post-pic">
                            <img src={postImage} alt="" />
                        </div>
                    </div>
                    <div className="actions">
                        <div className="left">
                            <p>#</p>
                            <p>#</p>
                            <p>#</p>
                        </div>
                        <div className="right">
                            <p>%</p>
                        </div>
                    </div>

                    <div className="comments">
                        <div className="l">
                            <input type="text" placeholder="Add a comment" value={post} onChange={(e) => setPost(e.target.value)} />
                        </div>
                        <div className="r">
                            <button type="submit">Post</button>
                        </div>
                    </div>

                    {
                        comments.map((comment, index) => {
                            return (
                                <ul key={index}>
                                    <li>{comment}</li>
                                </ul>
                            )
                        })
                    }

                </div>
            </form>
        </>
    );
};

export default Post;