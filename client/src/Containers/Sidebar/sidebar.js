import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './sidebar.css'

class Sidebar extends Component {
  state = {
    sidebar: ['HOME', 'ABOUT', 'BLOG', 'CONACT']
  }

  render() {
    return (
      <div className='sidebar'>
      <List component='nav'>
        {this.state.sidebar.map((sidebar, i) => {
          return (
            <ListItem button key={i}>
              <ListItemText primary={sidebar}/>
            </ListItem>
          )
        })}
      </List>
    </div>
    )
  }
}

export default Sidebar;