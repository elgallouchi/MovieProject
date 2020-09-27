import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {

  render () {
    return (
      <header>
          <Link to='/'>Home</Link> |
          <Link to='/movies'>Movies</Link> |
          <Link to='/series'>Series</Link>
        </header>
    );
  }
}
export default Navigation;