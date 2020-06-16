import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Result extends PureComponent {
  static propTypes = {
    text: PropTypes.string,
    tag: PropTypes.string,
    mark: PropTypes.string,
    sources: PropTypes.array
  };

  onClickAction = () => {};

  render() {
    return (
      <div className="result" onClick={this.onClickAction} >
        <span className="tag">{this.props.tag}</span>
        {this.props.text.length > 70 ? this.props.text.substring(0, 70) + '...' : this.props.text }
        <span className="copy copy-to-clipboard" data-clipboard-text={this.props.text + '\n' + this.props.sources.join("\n")}><button onClick="event.stopPropagation()">Quick Copy</button></span>
      </div>
    );
  }
}
