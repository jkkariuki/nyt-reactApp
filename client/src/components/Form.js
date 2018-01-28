import React from "react";
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { handleInputChange, search, handleFormSubmit, startDate, endDate } = this.props
    return (
      <div className="panel-body">
        <div className="jumbotron" >
          <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
        </div>

        <form role="form">
          <div className="form-group">
            <label htmlFor="search">Search Term:</label>
            <input type="text" className="form-control" id="search-term"
              onChange={handleInputChange}
              value={search}
              name="searchTopic"
              placeholder="Search for an article" />
          </div>

          <div className="form-group">
            <input className="form-control"
              type="text"
              value={startDate}
              onChange={handleInputChange}
              name="startYear"
            />
          </div>

          <div className="form-group">
            <input className="form-control"
              type="text"
              value={endDate}
              onChange={handleInputChange}
              name="endYear" />
          </div>

          <button type="submit" className="btn btn-default" id="run-search"
            onClick={handleFormSubmit}
          ><i className="fa fa-search"></i> Search</button>
          <button type="button" className="btn btn-default" id="clear-all"
          ><i className="fa fa-trash"></i> Clear Results</button>

        </form>
      </div>
    );
  }
}

Form.props = {
  handleInputChange: PropTypes.func,
  search: PropTypes.string,
  handleFormSubmit: PropTypes.func,
  startYear: PropTypes.string,
  endYear: PropTypes.string
}

export default Form;