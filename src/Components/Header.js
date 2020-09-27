import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return(
      <header>
        <div className='container'>
        <Link to='/'> <h1><i class="fas fa-film"></i> ciné<span></span></h1></Link>
          {/* <h1></h1> */}
          <Navigation />
        </div>
      </header>
    );
  }
}
export default Header;