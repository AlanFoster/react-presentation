import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";
import CodeDemo from './code-demo';

const images = require('./images');

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.reactjsLogo.replace('/','')} margin="0px auto 40px" height="293px"/>

          <Heading size={1} fit caps lineHeight={1} textColor="black">
            React.js
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="black">
          <Heading size={1} fit textColor="primary" textFont="secondary">
            What is it?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">Created by Facebook</Appear></ListItem>
            <ListItem><Appear fid="2">JavaScript framework for front-end Components</Appear></ListItem>
            <ListItem><Appear fid="3">Opinionated on Data Flow</Appear></ListItem>
            <ListItem><Appear fid="4">Fast - Virtual DOM</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/person.example")}
            margin="20px auto"/>
        </Slide>

        <Slide transition={['slide']} bgColor="black">
          <Image src={images.kat.replace('/','')} margin="0px auto 40px" height="293px"/>
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Wait what?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.reactjsLogo.replace("/", "")} bgDarken={0.75}>
          <Image src={images.transpiler.replace('/','')} margin="0px auto 40px"/>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear fid="1">
            <Heading textColor="primary" >
              Props
            </Heading>
          </Appear>

          <List textColor="primary">
            <ListItem><Appear fid="2">Passed to the component via attributes</Appear></ListItem>
            <ListItem><Appear fid="3">Immutable - The component will not change these values</Appear></ListItem>
            <ListItem><Appear fid="4">Changing props causes a re-render</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <CodeDemo
            lang="javascript"
            source={require("raw!./examples/person.example")}
            margin="20px auto"/>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear fid="1">
            <Heading textColor="primary" >
              State
            </Heading>
          </Appear>

          <List textColor="primary">
            <ListItem><Appear fid="2">Private - Maintained Internally</Appear></ListItem>
            <ListItem><Appear fid="3">Mutable - The component <strong>can</strong> change these values</Appear></ListItem>
            <ListItem><Appear fid="4">Changing state causes a re-render</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <CodeDemo
            lang="javascript"
            source={require("raw!./examples/state.example")}
            margin="20px auto"/>
        </Slide>
      </Deck>
    );
  }
}
