import React, {Component} from 'react';

import Avatar from 'material-ui/Avatar';
import  user  from '../assets/img/User.svg'
import sg_logo from '../assets/img/sg_logo.png'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

class ChatItemComponent extends Component {

  render(){

    return(
    <div className="chatItemContainer">
      <MuiThemeProvider>
        <Paper zDepth={2} className={(this.props.user)? "chatItemStyleUser":"chatItemStyleChatbot"}>
          <div className="bx--grid">
            <div className="bx--row">
              <div className="bx--col-xs-3 bx--col-sm-3 bx--col-md-3 bx--col-lg-3 bx--col-xl-3 bx--col-xxl-3 imageContainer">
                <Avatar src={(this.props.user)? user:sg_logo} style={{height:'4vw', width:'4vw', backgroundColor:'trasnparent'}} />
              </div>
              <div className="bx--col-xs-9 bx--col-sm-9 bx--col-md-9 bx--col-lg-9 bx--col-xl-9 bx--col-xxl-9">
                <div className="bx--grid">
                  <div className="bx--row">
                    <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-12 chatItemTextStyle">
                      {this.props.text}
                    </div>
                  </div>
                  <div className="bx--row">
                    <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-12 chatItemTimeStyle">
                      {this.props.time}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </MuiThemeProvider>
    </div>
    );
  }

}

export default ChatItemComponent;
