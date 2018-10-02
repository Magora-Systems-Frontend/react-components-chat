import {
  ADD_MESSAGE,
  CLEAR_MESSAGES,
} from './constants';

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        action.payload,
      ];
    case CLEAR_MESSAGES:
      return {...initialState};
    default:
      return state;
  }
}

