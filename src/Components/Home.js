import React from 'react';
import { Link } from 'react-router-dom';

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
          <div className='container'>

          <div className='intro'>
            <h3>Tous les films</h3>
            <p>
              Retrouvez les films recensés sur ce site, à voir ou au revoir, seul, en famille ou entre amis. 
            </p>
          </div>

          <div className='popular-titles'>
            <div className='movies'>
                  <img src='../img/movie.jpg' alt='' />
                  <h3><Link to='/movies'>Popular Movies</Link></h3>
            </div>

            <div className='series'>
                  <img src='../img/serie.jpg' alt='' />
                  <h3><Link to='/series'>Popular Series</Link></h3>
            </div>
          </div>

          </div>
        </section>
    );
  }
}
export default Home;