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
            <ListItem><Appear>JavaScript framework for front-end Components</Appear></ListItem>
            <ListItem><Appear>Opinionated on Data Flow</Appear></ListItem>
            <ListItem><Appear>Fast - Virtual DOM</Appear></ListItem>
            <ListItem><Appear>Created by Facebook</Appear></ListItem>
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
          <Appear>
            <Heading textColor="primary" >
              Props
            </Heading>
          </Appear>

          <List textColor="primary">
            <ListItem><Appear>Passed to the component via attributes</Appear></ListItem>
            <ListItem><Appear>Immutable - The component will not change these values</Appear></ListItem>
            <ListItem><Appear>Changing props causes a re-render</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <CodeDemo
            lang="javascript"
            source={require("raw!./examples/person.example")}
            margin="20px auto"/>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Heading textColor="primary" >
              State
            </Heading>
          </Appear>

          <List textColor="primary">
            <ListItem><Appear>Private - Maintained Internally</Appear></ListItem>
            <ListItem><Appear>Mutable - The component <strong>can</strong> change these values</Appear></ListItem>
            <ListItem><Appear>Changing state causes a re-render</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <CodeDemo
            lang="javascript"
            source={require("raw!./examples/state.example")}
            margin="20px auto"/>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Heading textColor="primary" textFont="secondary">
              Component Types
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Heading textColor="primary" >
              Pure Components
            </Heading>
          </Appear>

          <List textColor="primary">
            <ListItem><Appear>Relies only on props</Appear></ListItem>
            <ListItem><Appear>Contains no state</Appear></ListItem>
            <ListItem><Appear>Renders the same way given the same props (idempotency)</Appear></ListItem>
            <ListItem><Appear>Easier to test, as all data is external and determinstic</Appear></ListItem>
            <ListItem><Appear>Re-usable, not dependant on specific data-sources</Appear></ListItem>
            <ListItem><Appear>ie the Person example</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/person.example")}
            margin="20px auto"/>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Heading textColor="primary" >
              Composite Components
            </Heading>
          </Appear>

          <List textColor="primary">
            <ListItem><Appear>Groups together Pure Components</Appear></ListItem>
            <ListItem><Appear>Maintains the state required to populate pure components</Appear></ListItem>
            <ListItem><Appear>Spoilers: Useful for flux pattern</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <CodeDemo
            lang="javascript"
            source={require("raw!./examples/composite.example")}
            margin="20px auto"/>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image src={images.reactjsLogo.replace('/','')} margin="0px auto 40px" height="293px"/>

          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            React.js - Real World
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Heading textColor="primary">
              What do we need?
            </Heading>
          </Appear>

          <Appear>
            <List>
              <ListItem><Appear>Opinionated Folder Structure</Appear></ListItem>
              <ListItem><Appear>Data Management - Flux</Appear></ListItem>
              <ListItem><Appear>CSS Styling</Appear></ListItem>
              <ListItem><Appear>Testing</Appear></ListItem>
              <ListItem><Appear>Building</Appear></ListItem>
              <ListItem><Appear>Linting</Appear></ListItem>
            </List>
          </Appear>
        </Slide>

        {/*
          TODO:
            Prop Types
            Smaller differences, gotchas - class vs className, for htmlFor - https://facebook.github.io/react/docs/tags-and-attributes.html
            ES6 Features -  binding arrow
        */}
      </Deck>
    );
  }
}
