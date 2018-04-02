import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addNewQuestion } from './../actions/textAction';
import { makeQuestionToWatson } from './../actions/textAction';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';

import ChatItemComponent from './ChatItem'

import send from '../assets/img/Send.svg'

class ChatComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      question: "",
      time: "",
      msgs: []
    }
  }

  componentWillReceiveProps(nextProps){
    let msgs = [];
    if(nextProps.textReducer.conversation.length !== 0){
      for (var i = nextProps.textReducer.conversation.length-1; i >= 0; i--) {
        msgs.push(<ChatItemComponent key={i} text={nextProps.textReducer.conversation[i].question} time={nextProps.textReducer.conversation[i].time} user={nextProps.textReducer.conversation[i].user}/>)
      }
    }else{
      msgs = <div></div>
    }

    this.setState({msgs})
  }

  makeRequest = () => {
    if(this.state.question !== ""){
      let date = new Date();
      let hours = (date.getHours() < 10)? `0${date.getHours()}`:date.getHours();
      let minutes = (date.getMinutes() < 10)? `0${date.getMinutes()}`:date.getMinutes();
      let seconds = (date.getSeconds() < 10)? `0${date.getSeconds()}`:date.getSeconds();
      date = `${hours}:${minutes}:${seconds}`
      this.props.addNewQuestion({
        question: this.state.question,
        user: true,
        time: date
      });
      this.props.makeQuestionToWatson(this.state.question);
      this.setState({question: ""});
    }
  }

  writing = (event) => {
    this.setState({question: event.target.value})
  }

  enterPressed = (event) => {
    if(event.key === 'Enter'){
      this.makeRequest()
    }
  }

  render(){
    console.log("rendered chat");
    return(
      <MuiThemeProvider>
        <div className="bx--grid marginChat">
          <div className="bx--row">
            <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-12">
              <Paper zDepth={3} className="chatStyle">
                <div className="bx--grid marginResponses">
                  <div className="bx--row">
                    <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-12">
                      <Paper zDepth={0} className="responsesStyle">
                        {
                          this.state.msgs
                        }
                      </Paper>
                      <div className="bx--row">
                        <div className="bx--col-xs-10 bx--col-sm-10 bx--col-md-10 bx--col-lg-10 bx--col-xl-10 bx--col-xxl-10">
                          <TextField
                            id="text-field-default"
                            className="inputTextStyle"
                            hintText=""
                            onChange={this.writing}
                            onKeyPress={this.enterPressed}
                            value={this.state.question}
                            />
                        </div>
                        <div className="bx--col-xs-2 bx--col-sm-2 bx--col-md-2 bx--col-lg-2 bx--col-xl-2 bx--col-xxl-2">
                          <IconButton className="sendButton" onClick={this.makeRequest}>
                            <img src={send} alt="send" className="sendIcon"/>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            </div>
          </div>
        </div>
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

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      addNewQuestion,
      makeQuestionToWatson
    },dispatch
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatComponent);
