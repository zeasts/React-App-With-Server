import 'babel-core/register';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './core/Router';
function run() {
  const component = Router.match({
    path: window.location.pathname
  });
  ReactDOM.hydrate((component, document.getElementById('app')));
}
constloadedStates = ['complete', 'loaded', 'interactive'];
if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}