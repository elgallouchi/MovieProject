import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      films: []
    }
  }


  render() {
    return(
        <section className='section-home'>

          <div className='movies'>
                <img src='../img/movie.jpg' alt='' />
                <h3><Link to='/movies'>Popular Movies</Link></h3>
          </div>

          <div className='series'>
                <img src='../img/serie.jpg' alt='' />
                <h3><Link to='/series'>Popular Series</Link></h3>
          </div>

        </section>
    );
  }
}
export default Home;