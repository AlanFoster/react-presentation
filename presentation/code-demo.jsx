import React from 'react';
import { CodePane } from "../src/spectacle";
import { Link } from "../src/spectacle";

const CodeDemo = React.createClass({
  reactResult() {
    return (
      <Link textColor="primary" href="https://jsfiddle.net/reactjs/69z2wepo/">
        JS Fiddle
      </Link>
    );
  },

  render() {
    return (
      <div>
        <div>
          <CodePane
            lang="javascript"
            source={this.props.source}
            margin="20px auto"/>
        </div>

        <div>
          {this.reactResult()}
        </div>
      </div>
    );
  }
});

export default CodeDemo;
