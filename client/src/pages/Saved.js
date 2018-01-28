import React from "react";
import API from "../utils/API"
import ArticleContainer from "../components/SavedContainer";
import SingleArticle from "../components/SingleArticle";



class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: []
        };
    }

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        console.log("load articles has been hit");
        API.getSavedArticles()
            .then(res => {
                let savedArticles= []
                for (let x = 0; x < res.data.length; x++) {
                    savedArticles.push(res.data[x])
                }
                this.setState({ saved: savedArticles });
            }
            )
            .catch(err => console.log(err));
    };

    deleteThisArticle = id => {
        // console.log("article id " + id );
        API.deleteArticle(id)
            .then(res => this.loadArticles())
            .catch(err => console.log(err));

    }

    render() {
        return (
            <div>

                <div className="container">
                    <h1 className="title">Saved Articles</h1>
                    <br />

                    <div className="savedArticles">
                        <ArticleContainer>
                            {this.state.saved.map(article => {
                                return (

                                    <SingleArticle >
                                        <strong>
                                            { article.name}
                                            <br />
                                            { article.url}
                                            <br />
                                            {article.date}
                                            <br />
                                        </strong>

                                        <button onClick={() => this.deleteThisArticle(article._id)}>Delete</button>
                                    </SingleArticle>

                                );

                            })}
                        </ArticleContainer>

                    </div>

                </div>

            </div>


        )
    }


}

export default Saved;
