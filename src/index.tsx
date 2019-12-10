import React from 'react';
import { render } from 'react-dom';

interface AppProps {
    hello: number
}

export const App: React.FC<AppProps> = ({ hello }) => {
  console.log(hello);
  return (
    <div>
      {hello}
    </div>
  );
};

render(<App hello={1} />, document.querySelector('.root'));
