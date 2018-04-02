import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

class NavBarComponent extends Component {

  render(){
    return(
      <MuiThemeProvider>
        <Paper zDepth={3}>
          <Toolbar className="navBarStyle">
            <ToolbarGroup firstChild={true}>
            </ToolbarGroup>
            <ToolbarGroup className="toolBarGroup">
                <font className="titleHeader">{this.props.textReducer.navBarTitle}</font>
            </ToolbarGroup>
            <ToolbarGroup lastChild={true}>
            </ToolbarGroup>
          </Toolbar>
        </Paper>
      </MuiThemeProvider>
    );
  }

}

function mapStateToProps(state){
  const {textReducer} = state;
  return {
    textReducer
  }
}

export default connect(mapStateToProps,null)(NavBarComponent);
