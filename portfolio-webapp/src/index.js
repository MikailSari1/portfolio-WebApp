import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your global CSS, this is fine
import './App.css'; // <--- THIS IS CRUCIAL: Make sure you import app.css here!
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);