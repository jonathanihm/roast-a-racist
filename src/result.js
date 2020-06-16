import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TextTruncate from 'react-text-truncate';

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
        <TextTruncate line={1} element="span" truncateText="..." text={this.props.text} />
        <span className="copy copy-to-clipboard" data-clipboard-text={this.props.text + '\n' + this.props.sources.join("\n")}><button onClick="event.stopPropagation()">Quick Copy</button></span>
      </div>
    );
  }
}
