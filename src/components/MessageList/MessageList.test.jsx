import { render } from '@testing-library/react';
import MessageList from './MessageList';

test('renders MessageList', () => {
  render(<MessageList messages={[]} />);
});
