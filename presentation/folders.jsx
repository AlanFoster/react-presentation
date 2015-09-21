import React from 'react';
import { Text } from "../src/spectacle";

const FolderStructure = React.createClass({
  render() {
    var style = {
      textAlign: 'left',
      width: '500px',
      margin: '0 auto'
    };

    return (
      <div style={style}>{this.props.children}</div>
    );
  }
});

const Folder = React.createClass({
  renderChildren() {
    const style = {
      marginLeft: '50px'
    };

    return React.Children.map(this.props.children, (child) => {
      return <div style={style}>{child}</div>;
    });
  },

  render() {
    return (
      <div>
        <Text textColor="primary">{this.props.name}/</Text>
        {this.renderChildren()}
      </div>
    );
  }
});

const File = React.createClass({
  render() {
    return (
      <Text textColor="primary">
        - {this.props.children}
      </Text>
    );
  }
});

export default {
  FolderStructure,
  Folder,
  File
}
