import React from 'react';
import Loading from './Loading';

class Movies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      films: []
    }
  }

  componentDidMount() {
    fetch('./datra.json')
    .then((response) => { return response.json(); })
    .then((data) => { 

      console.log(data.data[1].category_id); 
        this.setState({films: data.data, loading: false})
    })
}

  render() {
    return (
      <section className='section-series'>
        {this.state.loading || !this.state.films ? (
          <Loading />
        ) : (

          <div className='container'>
            {
              this.state.films.filter(ele => ele.category_id === "movie").map((serie, i) => {
                return (
                  <article className='series' key={i}>
                    <img src={serie.images.url} alt={serie.title} width="500" height="300" />
                    <h3>{serie.title}</h3>
                    {/* <p>{serie.description}</p> */}
                  </article>
              )})
            }
          </div>
        )}
      </section>
    );
  }
}
export default Movies;