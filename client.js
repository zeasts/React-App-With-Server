import 'babel-core/register';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './core/Router';

function run() {
  const urlPath = Router.match({
    path: window.location.pathname
  });

  ReactDOM.hydrate(urlPath, document.getElementById('app'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
