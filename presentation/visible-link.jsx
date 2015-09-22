import React from 'react';
import { Link } from "../src/spectacle";

const VisibleLink = React.createClass({
  render() {
    return (
      <div textColor="primary">
        {this.props.children} - <Link href={this.props.href} style={{color: 'white'}}>{this.props.href}</Link>
      </div>
    )
  }
});

export default VisibleLink;
