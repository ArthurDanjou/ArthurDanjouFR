import React, {useEffect, useState} from "react";
import "./posts.scss";
import Tag from "../tag/tag";
import * as axios from "axios";
import Loading from "./loading/Loading";
import Link from "next/link";
import 'moment/locale/fr';
import Moment, { now } from 'react-moment';

const Posts = () => {

    const [isLoading, setLoading] = useState(true);
    const [getPosts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts()
            .then(() => {
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, []);

    const loadPosts = async () => {
        await axios.get("https://localhost:8080/api/posts")
            .then(response => {
                setPosts(response);
            })
            .catch(error => console.log(error));
    }

    const renderPosts = () => {
        if (getPosts.length) {
            return (
                <div className="post-container container">
                    {getPosts.map(post => {
                        return (
                            <div className="post">
                                <Link href={`/blog/${post.id}`}>
                                    <a>
                                        <div className="post-cover" style={{backgroundImage: `url(${post.image})`}}/>
                                        <h3>{post.title}</h3>
                                    </a>
                                </Link>
                                <div className="post-date">
                                    <Moment to={post.date}>{now}</Moment>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div className="no-post container">
                    <h1>Il n'y a malheureusement aucun article de posté pour le moment. 😕</h1>
                </div>
            )
        }
    };

    return (
        <section id="posts">
            <Tag color="#FF9900" background="#FFEED9" left={false}>Mon blog</Tag>
            {isLoading ? <Loading class="loader container" /> : renderPosts()}
        </section>
    )
};

export default Posts;