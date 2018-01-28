import React from "react";

class SingleArticle extends React.Component {
    render() {
        return (
            <li className="list-group-item">
                {this.props.children}
            </li>
        )
    }
}

export default SingleArticle;