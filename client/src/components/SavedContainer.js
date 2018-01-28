import React from "react";

class ArticleContainer extends React.Component {

    render() {
        return (
            <div className="list-overflow-container">
              <ul className="list-group">
                {this.props.children}
              </ul>
            </div>
          );
    }
}

export default ArticleContainer;