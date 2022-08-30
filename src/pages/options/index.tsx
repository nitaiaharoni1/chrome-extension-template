import { createRoot } from 'react-dom/client';
import { Options } from './options';
import './index.css';

const appContainer = document.querySelector('#app-container');
const root = createRoot(appContainer);
root.render(<Options />);
