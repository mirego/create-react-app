// Vendor
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './App';

// Service Worker
import registerServiceWorker from './registerServiceWorker';

// Styles
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
