import React from 'react';
import { CodePane } from "../src/spectacle";

const CodeDemo = React.createClass({
  reactResult() {
    return <div />
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
