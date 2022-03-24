import React from 'react';
const path = '/500';
const action = () =><NotFound />;

function NotFound () {
  return(
    <div>
      <h1>Server Error </h1>
      <p>Sorry, There seems to be server side issues. .</p>
      <img src="https://ubiq.co/tech-blog/wp-content/uploads/2020/08/apache-500-internal-server-error.png" />
    </div>
  );
}

export default { path,  action };
