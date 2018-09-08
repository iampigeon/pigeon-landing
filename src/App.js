import React, { Component } from 'react';
import logo from './logo.svg';
import mac from './pigeon-topics.png';
import './App.css';

import PropTypes from 'prop-types'

import ContactInput from './contact-input'

import 'semantic-ui-css/semantic.min.css';

import SyntaxHighlighter from 'react-syntax-highlighter';
import pigeonTheme  from './pigeonTheme';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Input
} from 'semantic-ui-react'

const styles = {
  howToGetPigeonTitle: {
    fontSize: '1.2em',
    fontFamily: 'Open Sans',
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: '100'
  },
  howToGetPigeonTitle2: {
    textAlign: 'left',
    fontSize: '1.2em',
    fontFamily: 'Open Sans',
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: '100'
  },
  howToGetPigeonDescription: {
    paddingTop: '20px',
    fontFamily: 'Open Sans',
    color: 'white',
    fontWeight: '200',
    lineHeight: 'normal',
    fontSize: '1.8em',
  }
}

const HomepageHeading = ({ mobile }) => (
  <div style={{display: 'flex', flex: 1, justifyContent: 'space-between', flexDirection: 'row', margin: '8% 0'}}>
    <Container text style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Header
        as='h1'
        content={`I am Pigeon`}
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          color: 'white',
          fontFamily: 'Open Sans, sans-serif',
          // marginBottom: 0,
          // marginTop: mobile ? '1.5em' : '3em',
        }}
      />
      <Header
        as='h2'
        content='Deliver messages never been so simple'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: '200',
          color: 'white',
          // marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />
    </Container>
    <Container style={{width: '50%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <Image rounded size='large' src={mac}/>
    </Container>
  </div>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign='center'
            vertical
            style={{background: '-webkit-linear-gradient(-45deg, rgba(49,37,102,1) 0%, rgba(85,64,178,1) 100%)'}}
            // color='#312566'
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Features</Menu.Item>
                <Menu.Item as='a'>Get Pigeon</Menu.Item>
                <Menu.Item as='a'>Contact</Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <div style={{
      background: '-webkit-linear-gradient(top, rgba(242,242,242,1) 0%, rgba(255,255,255,1) 50%, rgba(242,242,242,1) 100%)',
      display: 'flex', padding: '8% 0', flexDirection: 'row', justifyContent: 'space-around'}}>
      <h2 class='ui icon header' style={{margin: '2rem 0 1rem', flex: 0.2, color: '#312566'}}>
        <i aria-hidden='true' class='settings icon' />Configurable<div class='sub header' style={{color: '#8378B5', marginTop: '10px'}}>
          Manage your applications and configure your custom messages
        </div>
      </h2>
      <h2 class='ui icon header' style={{flex: 0.2, color: '#312566'}}>
        <i aria-hidden='true' class='check icon' />Easy Setup<div class='sub header' style={{color: '#8378B5', marginTop: '10px'}}>
        Deliver messages in just 3 steps for your mobile apps or web services
        </div>
      </h2>
      <h2 class='ui icon header' style={{flex: 0.2, color: '#312566'}}>
        <i aria-hidden='true' class='chart bar outline icon' />Trackeable<div class='sub header' style={{color: '#8378B5', marginTop: '10px'}}>
        Track your messages states and get metrics in every minute
        </div>
      </h2>
      <h2 class='ui icon header' style={{flex: 0.2, color: '#312566'}}>
        <i aria-hidden='true' class='handshake outline icon' />B2B Reseller<div class='sub header' style={{color: '#8378B5', marginTop: '10px'}}>
          Use pigeon to deliver software solutions and make earns
        </div>
      </h2>
    </div>

    <div style={{
      padding: '8% 3%',
      background: '-webkit-linear-gradient(top, rgba(67,51,140,1) 0%, rgba(49,37,102,1) 38%, rgba(49,37,102,1) 100%)'
    }}>
      <Grid>
      <Grid.Row columns={1}>
        <Grid.Column>
        <div style={{
          marginBottom: '7%',
          fontSize: '3em',
          color: 'white'
        }}>
        How to get pigeon?
        </div>
        </Grid.Column>
      </Grid.Row>
       <Grid.Row 
        columns={3}
        style={{
          marginBottom: '30px',
          paddingBottom: '60px',
          borderBottom: 'rgba(255, 255, 255, 0.05) 1px solid',
        }}>
          <Grid.Column>
            <div style={styles.howToGetPigeonTitle}>
              Step 1
            </div>
            <div style={styles.howToGetPigeonDescription}>
            Registry your application and get your API key
            </div>
          </Grid.Column>
          <Grid.Column>
            <div style={styles.howToGetPigeonTitle}>
              Step 2
            </div>
            <div style={styles.howToGetPigeonDescription}>
            Create the topic and and define what you will deliver
            </div>
          </Grid.Column>
          <Grid.Column>
            <div style={styles.howToGetPigeonTitle}>
              Step 3
            </div>
            <div style={styles.howToGetPigeonDescription}>
            Select any channel and set up the messages criterias
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column>
            <div style={styles.howToGetPigeonTitle2}>
              Deliver
            </div>
              <SyntaxHighlighter 
                showLineNumbers 
                language='javascript' 
                style={pigeonTheme} 
                customStyle={{textAlign: 'left'}}>
                  {deliverSnippet}
              </SyntaxHighlighter>
          </Grid.Column>
          <Grid.Column>
            <div style={styles.howToGetPigeonTitle2}>
              Recieve
            </div>
              <SyntaxHighlighter 
                showLineNumbers 
                language='javascript' 
                style={pigeonTheme} 
                customStyle={{textAlign: 'left'}}>
                  {receiveSnippet}
              </SyntaxHighlighter>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Wanna try?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible.
              Let us delight your customers and empower your needs... through pure data analytics.
            </p>
          </Grid.Column>
          <Grid.Column textAlign='center' floated='right' width={6}>
            <ContactInput 
              placeholder={'Email'}
              buttonText={'Send'}
              buttonColor={'#4f3ca6'}
              url={'https://goo.gl/forms/o6owgUQ3upPpUq422'}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <div 
      style={{
        background: '-webkit-linear-gradient(top, rgb(49, 37, 102) 0%, rgb(67, 51, 140) 100%)',
        padding: '5em 0em',
        color: 'white',
        textAlign: 'left',
        paddingLeft: '5%',
        letterSpacing: '3px',
        fontWeight: '200',
      }}>
        {'WITH ❤️ I AM PIGEON TEAM'}
        <span style={{margin: '0 25px'}}>{'|'}</span>
        {'2018'}
    </div>
  </ResponsiveContainer>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomepageLayout />
      </div>
    );
  }
}

export default App;

// <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>


const deliverSnippet = `import Pigeon from 'iampigeon';
const pigeon = new Pigeon({ apiKey: PIGEON_API_KEY });

pigeon.deliver({ topic: 'update', message: 'I am pigeon' });
`

const receiveSnippet = `import Pigeon from 'iampigeon';
const pigeon = new Pigeon({ apiKey: PIGEON_API_KEY });

pigeon.receive({ topic: 'update' }, (message) => {
  // manage your message
});
`