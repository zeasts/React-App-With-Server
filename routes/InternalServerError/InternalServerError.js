/*
 * Learning Isomorphic Web Application Development
 * Copyright © 2016 Konstantin Tarkus, Packt Publishing
 */

import React from 'react';

const path = '/500';
const action = () => <NotFound />;

function NotFound() {
  return (
    <div>
      <h1>Internal Server Error</h1>
      <p>Sorry, There is a problem with the resource looking for.</p>
    </div>
  );
}

export default { path, action };
