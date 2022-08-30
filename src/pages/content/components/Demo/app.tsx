import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    console.log('content view loaded');
  }, []);

  return <div className='content-view'>content view</div>;
};
