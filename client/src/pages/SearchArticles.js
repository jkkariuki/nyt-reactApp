import React from "react";
import Form from "../components/Form";
import API from "../utils/API";
import ResultItem from "../components/ResultItem";
import Results from "../components/Results"
//import articles from "../components/articles"


class Searches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            searchTopic: "",
            startDate: "2017-08-08",
            endDate: "2018-01-24"
        }
    };


   

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        API.getNYTarticles({
            searchTopic: this.state.searchTopic,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }).then(res=> {
                let resultsArray = []
                for (let i = 0; i < res.data.docs.length; i++) {
                    resultsArray.push(res.data.docs[i])
                }
                this.setState({ articles: resultsArray });
            
            
        }).catch(function (error) {
            console.log(error);
        });
    }

    saveThisArticle = (headline, link, date) => {
        API.saveArticle({
            name: headline,
            url: link,
            date: date
        })
            .then(res => console.log(res))
            .catch(err => console.log("Save error: " + err));
    }

    render() {

        return (
            <div>
                <Form
                    search={this.state.searchTopic}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    startDate={this.startDate}
                    endDate={this.endDate}
                />

                <div className="container">
                    <h1 className="title">Article Results</h1>
                    <br />
                    <Results>
                        {this.state.articles.map(article => {
                            return (
                                <ResultItem>
                                    {article.headline.main}
                                    <br />
                                    {<a href={article.web_url}>{article.web_url}</a>}
                                    <br />
                                    { article.pub_date}
                                    <br />

                                    <button onClick={() => this.saveThisArticle(article.headline.main, article.web_url, article.pub_date)}>Save</button>
                                </ResultItem>

                            );

                        })}
                    </Results>                       
                </div>

            </div>
        );
    }
}
export default Searches;
