import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const ReactRoot = createRoot(container);
ReactRoot.render(<App/>);


