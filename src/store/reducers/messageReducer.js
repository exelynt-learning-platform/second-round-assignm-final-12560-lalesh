import * as types from '../actions/messageTypes';

const initialState = {
  messages: [],
  loading: false,
  error: null
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case types.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: [
          ...state.messages,
          {
            id: Date.now() + Math.random() ,
            text: action.payload.userMessage,
            sender: 'user',
            timestamp: new Date().toISOString()
          },
          {
            id: Date.now() + 1,
            text: action.payload.aiResponse,
            sender: 'ai',
            timestamp: new Date().toISOString()
          }
        ]
      };

    case types.SEND_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case types.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };

    case types.CLEAR_MESSAGES:
      return {
        ...state,
        messages: [],
        error: null
      };

    default:
      return state;
  }
};

export default messageReducer;
