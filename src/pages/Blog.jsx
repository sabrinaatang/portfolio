import React from "react";
import "../styling/Blog.css"
import { useState } from "react";
import Bp1 from "../components/BlogPosts/Bp1.jsx"
import Navbar from "../components/Navbar.jsx";

function Blog() {
    const [selectedPost, setSelectedPost] = useState(null);
    const blogPosts = [
        // {
        //     id: 2,
        //     header: "Coming Soon",
        //     description: null,
        //     date: null,
        //     topic: null,
        //     detailsComponent: null,
        // },
        {
            id: 1,
            header: "UC Irvine 2025 Commencement",
            description: "If I were to give a commencement speech..",
            date: "June 14, 2025",
            topic: "Academia",
            detailsComponent: <Bp1 />,
        },
        
    ];

    const showDetails = (post) => {
        setSelectedPost(post);
    };

    const closeDetails = () => {
        setSelectedPost(null);
    };
    return (
        <div className="blog-page">
        <Navbar />
        <div className="blog-section">
            <h1 className="blog-title">Blog</h1>
            <p className="blog-description">
                Welcome to my blog! This is a space where I share my thoughts on design, career-related topics, education, and more.
            </p>

            <div className="blog-cards">
            {blogPosts.map((post) => (
                <div key={post.id} className="blog-card">
                    <h2 className="blog-card-header">{post.header}</h2>
                    <p className="blog-card-description">{post.description}</p>
                    <p className="blog-card-meta">
                        <span>{post.date}</span> | <span>{post.topic}</span>
                    </p>
                    <button
                        className="read-more-button"
                        onClick={() => showDetails(post)}
                    >
                        Read More
                    </button>
                </div>
            ))}
            </div>
            
            {selectedPost && (
            <div className="blog-details-overlay">
                <div className="blog-details">
                    <button className="close-button" onClick={closeDetails}>
                        ×
                    </button>
                    {selectedPost.detailsComponent}
                </div>
            </div>
            )}
        </div>
        </div>
    )
}

export default Blog;