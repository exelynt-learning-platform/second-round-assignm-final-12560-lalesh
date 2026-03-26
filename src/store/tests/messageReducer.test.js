import messageReducer from '../reducers/messageReducer';
import * as types from '../actions/messageTypes';

describe('Message Reducer', () => {
  const initialState = {
    messages: [],
    loading: false,
    error: null
  };

  it('should return the initial state', () => {
    expect(messageReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SEND_MESSAGE_REQUEST', () => {
    const action = { type: types.SEND_MESSAGE_REQUEST };
    const expectedState = {
      ...initialState,
      loading: true
    };
    expect(messageReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SEND_MESSAGE_SUCCESS', () => {
    const userMessage = 'Hello';
    const aiResponse = 'Hi there!';
    const action = {
      type: types.SEND_MESSAGE_SUCCESS,
      payload: { userMessage, aiResponse }
    };
    const state = messageReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.messages.length).toBe(2);
    expect(state.messages[0].text).toBe(userMessage);
    expect(state.messages[1].text).toBe(aiResponse);
  });

  it('should handle SEND_MESSAGE_FAILURE', () => {
    const error = 'API Error';
    const action = {
      type: types.SEND_MESSAGE_FAILURE,
      payload: error
    };
    const state = messageReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(error);
  });
});
