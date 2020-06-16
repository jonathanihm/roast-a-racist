import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Footer extends PureComponent {
  static propTypes = {
    
  };

  render() {
    return (
      <footer className="footer">
          Have a suggestion? Submit a PR on GitHub or shoot me an <a href="mailto:jonathan.ihm@gmail.com">e-mail</a>
          <p></p>
          <a href="https://paypal.me/jihm" className="pay-pill"><i class="fas fa-coffee"></i> Buy me a coffee</a>
      </footer>
    );
  }
}
