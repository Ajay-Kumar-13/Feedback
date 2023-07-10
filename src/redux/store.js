import { createStore } from 'redux';

const initialState = {
  questionNumber: 0,
  options: false
};

const UPDATE_SHARED_VARIABLE = 'UPDATE_SHARED_VARIABLE';

export function updatequestionNumber(value) {
  return {
    type: UPDATE_SHARED_VARIABLE,
    payload: value
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SHARED_VARIABLE:
      return {
        ...state,
        questionNumber: action.payload
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
