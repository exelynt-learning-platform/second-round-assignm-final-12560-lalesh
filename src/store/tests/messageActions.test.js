import * as actions from '../actions/messageActions';
import * as types from '../actions/messageTypes';

describe('Message Actions', () => {
  it('should create an action to send message request', () => {
    const expectedAction = {
      type: types.SEND_MESSAGE_REQUEST
    };
    expect(actions.sendMessageRequest()).toEqual(expectedAction);
  });

  it('should create an action for successful message send', () => {
    const userMessage = 'Hello';
    const aiResponse = 'Hi there!';
    const expectedAction = {
      type: types.SEND_MESSAGE_SUCCESS,
      payload: {
        userMessage,
        aiResponse
      }
    };
    expect(actions.sendMessageSuccess(userMessage, aiResponse)).toEqual(expectedAction);
  });

  it('should create an action for message failure', () => {
    const error = 'Network error';
    const expectedAction = {
      type: types.SEND_MESSAGE_FAILURE,
      payload: error
    };
    expect(actions.sendMessageFailure(error)).toEqual(expectedAction);
  });
});
