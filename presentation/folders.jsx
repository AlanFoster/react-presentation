import React from 'react';
import { Text } from "../src/spectacle";

const RenderCommentMixin = {
  renderComment() {
    if (!this.props.comment) return null;

    return (
      <span style={{color: 'white'}}>
      - {this.props.comment}
    </span>
    )
  }
};

const FolderStructure = React.createClass({
  render() {
    var style = {
      textAlign: 'left',
      width: '900px',
      margin: '0 auto'
    };

    return (
      <div style={style}>{this.props.children}</div>
    );
  }
});

const Folder = React.createClass({
  mixins: [RenderCommentMixin],

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
        <Text textColor="primary">{this.props.name}/ {this.renderComment()}</Text>
        {this.renderChildren()}
      </div>
    );
  }
});

const File = React.createClass({
  mixins: [RenderCommentMixin],

  render() {
    return (
      <Text textColor="primary">
        - {this.props.children} {this.renderComment()}
      </Text>
    );
  }
});

export default {
  FolderStructure,
  Folder,
  File
}
