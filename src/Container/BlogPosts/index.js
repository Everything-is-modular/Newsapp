import React, { Component } from 'react';
import './style.css';

import Header from './../../Components/Header';
import Post from './../../Components/Post';


class BlogPosts extends Component {
    constructor(props){
        super(props)
        this.state = {
            articles: [],
        }
    }

    componentDidMount(){
        let apiKey = '212b3ff89c2f46dba79a92bd866e1658';
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                articles: data.articles,
            })
        })


    }

    showAlert(msg) {
        alert(msg)
    }

    render() {
        console.log('ARTICLES ', this.state.articles) ;
        let { articles } = this.state;
        return(
            <div>
                <Header />
                {
                    articles.length > 0 && articles.map((article, index) => {
                        return(
                            <div className="posts-wrapper">
                                <Post 
                                    article={article}
                                    key={`article-${index}`}
                                    showAlert={this.showAlert}
                                />
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default BlogPosts;