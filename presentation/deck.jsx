import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";
import CodeDemo from './code-demo';
import { FolderStructure, Folder, File } from './folders';

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
            <ListItem><Appear>By itself, the V in MVC</Appear></ListItem>
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
          <Image src={images.transpiler.replace('/','')} margin="0px auto 40px" />

          <CodePane
            lang="javascript"
            source={require("raw!./examples/person.example")}
            margin="20px auto"/>

          <Link href="http://babeljs.io/repl/" textColor="primary">Babel REPL</Link>
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
              Prop Type Validation
            </Heading>
          </Appear>

          <Appear>
            <Text textColor="primary">Creates console warnings</Text>
          </Appear>

          <Appear>
            <CodeDemo
              lang="javascript"
              source={require("raw!./examples/person-prop-types.example")}
              margin="20px auto"/>
          </Appear>
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
              <ListItem><Appear>Build System</Appear></ListItem>
            </List>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Development
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Heading textColor="primary">
              Thinking with React
            </Heading>
          </Appear>

          <Appear>
            <Layout>
              <Fill>
                <Appear>
                  <Text textColor="primary">
                    Start with a mockup
                  </Text>
                  <div>
                    <Image src={images.reactMockup.replace('/','')} margin="0px auto 40px" />
                  </div>
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <Text textColor="primary">
                    Split into components
                  </Text>
                  <div>
                    <Image src={images.reactMockupSplit.replace('/','')} margin="0px auto 40px" />
                  </div>
                </Appear>
              </Fill>
            </Layout>
          </Appear >

            <Appear>
              <Text textColor="primary">
                Remember: Pure Components!
              </Text>
            </Appear>
        </Slide>


        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Heading textColor="primary">
              Folder Structure
            </Heading>
          </Appear>

          <Appear>
            <Heading size={5} textColor="white">
              Pure Components Structure
            </Heading>
          </Appear>

          <Appear>
            <div>
              <FolderStructure>
                <Folder name='component-name'>
                  <Folder name='tests'>
                    <File comment="Naming convention enforced">
                      index.<u>spec</u>.jsx
                    </File>
                  </Folder>

                  <Folder name='stylesheets'>
                    <File>index.scss</File>
                  </Folder>

                  <File>
                    index.jsx
                  </File>
                </Folder>
              </FolderStructure>
            </div>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Heading textColor="primary">
              Style Sheets
            </Heading>
          </Appear>

          <Appear>
            <div>
              <Text textColor="primary">stylesheets/index.scss</Text>
              <CodePane
                lang="scss"
                source={require("raw!./examples/css-example-scss.example")}
                margin="20px auto"/>
            </div>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading textColor="primary">
            Style Sheets
          </Heading>

          <div>
            <Text textColor="primary">index.jsx</Text>
            <CodePane
              lang="js"
              source={require("raw!./examples/css-example-component.example")}
              margin="20px auto"/>
          </div>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Heading textColor="primary">
              Testing
            </Heading>
          </Appear>

          <Appear>
            <List>
              <ListItem><Appear>Test components in isolation</Appear></ListItem>
              <ListItem><Appear>Jasmine - DSL for writing tests, similar to rspec</Appear></ListItem>
              <ListItem><Appear>Karma - Runs tests in a <strong>real</strong> browser</Appear></ListItem>
            </List>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <div>
              <Text textColor="primary">tests/index.<u>spec</u>.jsx</Text>
              <CodePane
                lang="js"
                source={require("raw!./examples/testing.example")}
                margin="20px auto"/>
            </div>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <List>
              <ListItem><Appear>Run all tests once with - npm run test</Appear></ListItem>
              <ListItem><Appear>Run tests and develop with - npm run testDev</Appear></ListItem>
              <ListItem><Appear>Run one test in isolation - fdescribe and fit</Appear></ListItem>
            </List>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Heading size={2} textColor="primary">
              Composite Components
            </Heading>
          </Appear>

          <Appear>
            <Heading size={6} textColor="white">
              Connecting the pieces...
            </Heading>
          </Appear>

          <Appear>
            <div>
              <FolderStructure>
                <Folder name='page-name'>
                  <Folder name='flux' comment="Server Interactions, State management" />
                  <Folder name='tests' />
                  <Folder name='stylesheets' />

                  <File comment="The composite object">
                    page.jsx
                  </File>

                  <File comment="Inject composite object onto DOM">
                    index.jsx
                  </File>
                </Folder>
              </FolderStructure>
            </div>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Heading size={2} textColor="primary">
              Flux
            </Heading>
          </Appear>

          <List>
            <ListItem><Appear>Facebook's <u>pattern</u> for data flow and management - <Link href="https://facebook.github.io/flux/docs/overview.html" textColor="white">docs</Link></Appear></ListItem>
          </List>

          <Appear>
            <Image src={images.flux.replace('/','')} margin="0px auto 40px" height="293px"/>
          </Appear>

          <List>
            <ListItem><Appear>We use the <Link href="https://github.com/addthis/fluxthis" textColor="white">fluxthis</Link> implementation</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Appear>
            <Image src={images.flux.replace('/','')} margin="0px auto 40px" height="220px"/>
          </Appear>

          <List>
            <ListItem><Appear><span style={{color: 'white'}}>Action</span> - Event payload; Button Pressed, Server Response, ...</Appear></ListItem>
            <ListItem><Appear><span style={{color: 'white'}}>Action Creator</span> - Triggers events, interacts with Dispatcher</Appear></ListItem>
            <ListItem><Appear><span style={{color: 'white'}}>Dispatcher</span> - Registry of Callbacks, triggering events to stores</Appear></ListItem>
            <ListItem><Appear><span style={{color: 'white'}}>Store</span> - Listens to action events, maintains state</Appear></ListItem>
            <ListItem><Appear><span style={{color: 'white'}}>View</span> - Our composite components, dependant on stores</Appear></ListItem>
          </List>
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
