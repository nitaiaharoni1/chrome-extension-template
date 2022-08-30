import { createRoot } from 'react-dom/client';
import { Panel } from './panel';
import './index.css';

const appContainer = document.querySelector('#root');
const root = createRoot(appContainer);
root.render(<Panel />);
