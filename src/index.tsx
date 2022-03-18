import React from 'react';
import { render } from 'react-dom';
import App from "./components/app";

const appContainer = document.getElementById('app');

appContainer && render(<App />, appContainer);