import { createStore } from 'redux';

const initialState = {
  questionNumber: 0,
  options: false,
  answer: ''
};

const UPDATE_SHARED_VARIABLE = 'UPDATE_SHARED_VARIABLE';
const UPDATE_ANSWER = 'UPDATE_ANSWER'

export function updatequestionNumber(value) {
  return {
    type: UPDATE_SHARED_VARIABLE,
    payload: value
  };
}

export function updateanswer(value) {
  console.log(value, "from store");
  return {
    type: UPDATE_ANSWER,
    payload: value
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SHARED_VARIABLE:
      return {
        ...state,
        questionNumber: action.payload
      };
    case UPDATE_ANSWER:
      return {
        ...state,
        answer: action.payload
      }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
