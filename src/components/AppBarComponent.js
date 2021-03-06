import React, { Component } from 'react';
import propTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import {orange} from 'material-ui/colors';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import BasicTabs from './TabComponent';
import Tabs, { Tab } from 'material-ui/Tabs';

// const styleSheet = createStyleSheet({
//   root: {
//     marginTop: 0,
//     width: '100%',
//
//   },
//   flex: {
//     flex: 1,
//   },
//   appBar: {
//     background: '#DD2C00'
//   }
// });

const styles = {
  root: {
    marginTop: 0,
    width: '100%',

  },
  flex: {
    flex: 1,
  },
  appBar: {
    background: '#DD2C00',
    elevation: 0,
    color: "#FFFFFF",
  }
};

class AppBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "contrast"
    }

  }

  handleClick() {
    console.log("Clicked!!!");
    // this.setState({color: "default"});

  }

  render() {
    return (
      <div style={styles.root}>
        <Toolbar style={styles.appBar}>
          <Typography type="title" color="inherit" style={styles.flex}>
            Avinash Reddy Kaitha
          </Typography>
          <Button color={this.state.color} onClick={this.handleClick.bind(this)}>ABOUT</Button>
          <Button color="contrast">PROJECTS</Button>
          <Button color="contrast">RESUME</Button>
          <Button color="contrast">CONTACT</Button>
        </Toolbar>
      </div>
    );
  }

}



export default AppBarComponent;

// <Tabs index={this.state.index} onChange={this.handleChange}>
//   <Tab label="ABOUT"/>
//   <Tab label="PROJECTS" />
//   <Tab label="RESUME" />
//   <Tab label="CONTACT" />
// </Tabs>

// <Button color={this.state.color} onClick={this.handleClick.bind(this)}>ABOUT</Button>
// <Button color="contrast">PROJECTS</Button>
// <Button color="contrast">RESUME</Button>
// <Button color="contrast">CONTACT</Button>


// <AppBar position="fixed" style={styles.appBar}>
//   <Toolbar>
//     <Typography type="title" color="inherit" style={styles.flex}>
//       Avinash Reddy Kaitha
//     </Typography>
//     <Button color={this.state.color} onClick={this.handleClick.bind(this)}>ABOUT</Button>
//     <Button color="contrast">PROJECTS</Button>
//     <Button color="contrast">RESUME</Button>
//     <Button color="contrast">CONTACT</Button>
//   </Toolbar>
// </AppBar>
