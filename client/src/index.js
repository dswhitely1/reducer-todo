import React from 'react';
import { render } from 'react-dom';
// Router
import { BrowserRouter as Router } from 'react-router-dom';
// App
import App from './components/App';
// Styles
import './styles/index.scss';

// TodoApplication

const todoApplication = <Router><App /></Router>;
const rootDocument    = document.getElementById( 'root' );

render( todoApplication, rootDocument );