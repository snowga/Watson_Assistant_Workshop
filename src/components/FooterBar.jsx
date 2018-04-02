import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import sg_logo from '../assets/img/sg_logo.png'

export class FooterBarComponent extends Component {

  render(){
    return (
      <MuiThemeProvider>
        <Toolbar className="footerBarStyle">
          <ToolbarGroup >
                  <font className="titleFooter">
                    {this.props.textReducer.FooterBarTitle}
                  </font>
                  <img src={sg_logo} alt="logo" className="sgLogo"/>
          </ToolbarGroup>
        </Toolbar>
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

export default connect(mapStateToProps,null)(FooterBarComponent);
