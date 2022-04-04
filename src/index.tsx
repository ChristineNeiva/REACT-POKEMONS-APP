import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// React démarre l'application en injectant notre composant App dans l'élément root 
// root est défini dans le fichier index.html
ReactDOM.render(
    <App />,
    document.getElementById('root')
);