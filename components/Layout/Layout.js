import React from 'react';
import Header from '../Header/Header'
import PropTypes from 'prop-types';
function Layout({ hero, children }) {
  return (
    <div>
      <Header>{hero}</Header>
      <main>
        {children}
      </main>
<footer>
   [35]
<span>© Company Name</span>
      </footer>
</div> );
}
Layout.propTypes = {
  hero: PropTypes.element,
  children: PropTypes.element.isRequired
};
export default Layout;
