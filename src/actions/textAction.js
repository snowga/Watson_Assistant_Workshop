import axios from 'axios';

import {
  ADD_NEW_QUESTION,
  MAKE_A_QUESTION,
  URL_WATSON_ASSISTANT
} from '../constants';

export const addNewQuestion = (question) => {
  console.log("adding a new question to array ",question);
  return {
    type: ADD_NEW_QUESTION,
    payload: question
  };
}

export const makeQuestionToWatson = (question) => {
  console.log("Making a new question to Watson ",question);
  let date = new Date();
  let hours = (date.getHours() < 10)? `0${date.getHours()}`:date.getHours();
  let minutes = (date.getMinutes() < 10)? `0${date.getMinutes()}`:date.getMinutes();
  let seconds = (date.getSeconds() < 10)? `0${date.getSeconds()}`:date.getSeconds();
  date = `${hours}:${minutes}:${seconds}`
  return dispatch => {
    axios.post(`${URL_WATSON_ASSISTANT}`,{
      	"request": question
    })
    .then(function (response) {
      console.log(response);
      dispatch({
        type: MAKE_A_QUESTION,
        payload: {
          question: response.data.output.text[0],
          user: false,
          time: date
        }
      });
    })
    .catch(function (error) {
      //console.log(error);
    });
  }
}
