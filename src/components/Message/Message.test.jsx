import { render } from '@testing-library/react';
import Message from './Message';

test('renders Message', () => {
  render(<Message message={{text:'hi',sender:'user',timestamp:Date.now()}} />);
});
