import {
ADD_NEW_QUESTION,
MAKE_A_QUESTION
} from '../constants';

const textReducer = (state = {
  navBarTitle: "Chatbot Watson Assistant",
  FooterBarTitle: "Powered by BlueHub",
  conversation: [],
}, action) => {
  switch (action.type) {
    case ADD_NEW_QUESTION:
    state = {
      ...state,
      conversation: [...state.conversation,action.payload]
    }
      break;
    case MAKE_A_QUESTION:
    state = {
      ...state,
      conversation: [...state.conversation,action.payload]
    }
      break;
    default:
      return state;
  }
  return state;
}

export default textReducer;
