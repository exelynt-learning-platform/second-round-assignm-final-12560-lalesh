import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, clearMessages } from '../store/actions/messageActions';

export const useChat = () => {
  const dispatch = useDispatch();
  const state = useSelector(s => s.messages);

  const send = (msg) => dispatch(sendMessage(msg));
  const clear = () => dispatch(clearMessages());

  return { ...state, send, clear };
};
