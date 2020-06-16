import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Results from './results';
import filterResponse from './filteredResponse';


export default class SearchForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filteredResults: filterResponse("", 20),
            searchTerm: ''
        };
    }

  static propTypes = {
    text: PropTypes.string
  };

  onSubmit = (e) => e.preventDefault();;

  onSearch = event => {
    this.setState({
      filteredResults: filterResponse(event.target.value, 20),
      searchTerm: event.target.value
    });
  };


  render() {
    return (
        <form onSubmit={this.onSubmit} className="search-form">
            <input name="search" 
              autoComplete="off"
              onChange={this.onSearch} placeholder="
          Search for stupid racist arguments thrown at you by old Uncle Melvin" />
            <Results results={this.state.filteredResults} searchTerm={this.state.searchTerm} />
        </form>
    );
  }
}