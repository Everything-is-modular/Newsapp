import React from 'react';
import './style.css';

function Post({article, showAlert}) {
    return(
        <div className="post" onClick={() => showAlert(article.title)}>
            <img src={article.urlToImage} alt="" />
            <div>{article.title}</div>
        </div>
    );
}

export default Post;