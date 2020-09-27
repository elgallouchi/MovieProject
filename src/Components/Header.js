import React from 'react';
import Navigation from './Navigation';

class Header extends React.Component {

  render() {
    return(
      <header>
        <div className='container'>
          <h1><i class="fas fa-film"></i> ciné<span></span></h1>
          {/* <h1></h1> */}
          <Navigation />
        </div>
      </header>
    );
  }
}
export default Header;