import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';


//Triggers div with id of 'root' and inject application inside
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, 
);