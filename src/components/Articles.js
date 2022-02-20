import React, { useState, useEffect } from "react";
import "./Articles.css";

//http://localhost:5000/

function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/")
            .then((response) => response.json())
            .then((data) => {
                console.log("this came", data);
                setArticles(data);
            });
    }, []);

    if (articles.length == 0) {
        return <>No Results</>;
    }
    return articles.map(post);
}

function post(p) {
    return (
        <div className="Post" key={p._id}>
            <div className="imageContainer">
                <center>
                    <img id="image" src={p.image} alt="No Image Found" />
                </center>
            </div>
            <div className="content">
                <h6>
                    {p.tag}
                    <div className="time">
                        <i className="fa fa-circle"></i> {p.time}
                    </div>
                </h6>
                <h6 className="headline">{p.headline}</h6>
                <div className="author">by {p.author}</div>
            </div>
        </div>
    );
}

export default Articles;
