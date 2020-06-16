import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Result from './result';
import Clipboard from "clipboard";


export default class Results extends PureComponent {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        results: PropTypes.array,
        searchTerm: PropTypes.string
    };

    componentDidMount() {
        this.clipboard = new Clipboard(".copy-to-clipboard");
      }
    
    componentWillUnmount() {
    this.clipboard.destroy();
    }

  render() {
    return (
        <div className="results">
            {this.props.results.map(result => (
            <Result text={result.text} sources={result.sources} tag={result.tags.map(x => x.toLowerCase().replace(/\W/g, ''))
            .filter(tag => tag.includes(this.props.searchTerm.toLowerCase().replace(/\W/g, ''))) } 
              key={result.id}/>
            ))}
        </div>
    );
  }
}
