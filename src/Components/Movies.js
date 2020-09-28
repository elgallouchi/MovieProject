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
    fetch('./data.json')
    .then((response) => { return response.json(); })
    .then((data) => { 

      console.log(data.data[1].category_id); 
        this.setState({films: data.data, loading: false})
    })
}

  render() {
    return (
      <section className='section-series'>
        <h2>FILMS</h2>

        {this.state.loading || !this.state.films ? (
          <Loading />
        ) : (

          <div className='container'>
            {
              this.state.films.filter(ele => ele.category_id === "movie" && ele.releaseYear >= 2010).map((serie, i) => {
                return (
                  <article className='series' key={i}>
                    <img src={Object.keys(serie.images.url).length !== 0 ? serie.images.url : '../img/image-non-trouve.jpg'} alt={serie.title} width="500" height="300" />
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