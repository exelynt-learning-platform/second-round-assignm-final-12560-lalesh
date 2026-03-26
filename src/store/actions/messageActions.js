import * as types from './messageTypes';
import openaiService from '../../services/openaiService';

export const sendMessageRequest = () => ({
  type: types.SEND_MESSAGE_REQUEST
});

export const sendMessageSuccess = (userMessage, aiResponse) => ({
  type: types.SEND_MESSAGE_SUCCESS,
  payload: {
    userMessage,
    aiResponse
  }
});

export const sendMessageFailure = (error) => ({
  type: types.SEND_MESSAGE_FAILURE,
  payload: error
});

export const clearError = () => ({
  type: types.CLEAR_ERROR
});

export const clearMessages = () => ({
  type: types.CLEAR_MESSAGES
});

export const sendMessage = (message) => {
  return async (dispatch) => {
    try {
      if (!message || message.trim().length === 0) return;

      dispatch(sendMessageRequest());

      const aiResponse = await openaiService.sendMessage(message);

      dispatch(sendMessageSuccess(message, aiResponse));
    } catch (error) {
      dispatch(sendMessageFailure(error.message));
    }
  };
};
