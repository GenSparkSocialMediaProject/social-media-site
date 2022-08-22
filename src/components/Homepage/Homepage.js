import axios from "axios";
import { Post } from "../Post/Post";
import { CreatePost } from "../Post/CreatePost";

export const Homepage = (props) => {
    // const posts = axios.get(`${window.location.hostname}/posts`);
    var posts = [
        {
            username: "LexiHensonDev",
            name: "Lexi Henson",
            timestamp: "04/05/2022",
            upvotes: 1200,
            downvotes: 52,
            content: "theisahtekhanjlw eioakhwtolakhwe alkwshetwealtp;",
        },
        {
            username: "LexiHensonDev",
            name: "Lexi Henson",
            timestamp: "04/05/2022",
            upvotes: 300,
            downvotes: 95,
            content: "theisahtekhanjlw eioakhwtolakhwe alkwshetwealtp;",
        },
        {
            username: "LexiHensonDev",
            name: "Lexi Henson",
            timestamp: "04/05/2022",
            upvotes: 0,
            downvotes: 0,
            content: "theisahtekhanjlw eioakhwtolakhwe alkwshetwealtp;",
        },
        {
            username: "LexiHensonDev",
            name: "Lexi Henson",
            timestamp: "04/05/2022",
            upvotes: 0,
            downvotes: 0,
            content: "theisahtekhanjlw eioakhwtolakhwe alkwshetwealtp;",
        },
        {
            username: "LexiHensonDev",
            name: "Lexi Henson",
            timestamp: "04/05/2022",
            upvotes: 0,
            downvotes: 0,
            content: "theisahtekhanjlw eioakhwtolakhwe alkwshetwealtp;",
        },
        {
            username: "LexiHensonDev",
            name: "Lexi Henson",
            timestamp: "04/05/2022",
            upvotes: 0,
            downvotes: 0,
            content: "theisahtekhanjlw eioakhwtolakhwe alkwshetwealtp;",
        },
        {
            username: "LexiHensonDev",
            name: "Lexi Henson",
            timestamp: "04/05/2022",
            upvotes: 0,
            downvotes: 0,
            content: "theisahtekhanjlw eioakhwtolakhwe alkwshetwealtp;",
        },
        {
            username: "LexiHensonDev",
            name: "Lexi Henson",
            timestamp: "04/05/2022",
            upvotes: 0,
            downvotes: 0,
            content: "theisahtekhanjlw eioakhwtolakhwe alkwshetwealtp;",
        },
        {
            username: "LexiHensonDev",
            name: "Lexi Henson",
            timestamp: "04/06/2022",
            upvotes: 100,
            downvotes: 0,
            content: "theisahtekhanjlw eioakhwtolakhwe alkwshetwealtp;",
        },
    ];

    return (
        <div style={{ alignSelf: "flex-end" }}>
            <CreatePost/>
            {posts.map((post, index) => {
                return (
                    <Post
                        key={index}
                        username={post.username}
                        name={post.name}
                        timestamp={post.timestamp}
                        upvotes={post.upvotes}
                        downvotes={post.downvotes}
                        content={post.content}
                    />
                );
            })}
        </div>
    );
};
