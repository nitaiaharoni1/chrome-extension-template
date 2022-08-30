import { createRoot } from 'react-dom/client';
import { Popup } from './popup';
import './index.css';

const appContainer = document.querySelector('#root');
const root = createRoot(appContainer);
root.render(<Popup />);
