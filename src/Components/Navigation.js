import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {

  render () {
    return (
      <nav>
          <Link to='/films'>Films</Link> 
          <Link to='/series'>Séries</Link> 
          <Link to='/signin'>SignIn</Link>
        </nav>
    );
  }
}
export default Navigation;