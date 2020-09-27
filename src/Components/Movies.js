import React from 'react';

class Movies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  render() {
    return (
      <div>

        {this.state.series.map((serie, i) => {
          return (
            <div key={i}>
              <img src={serie.images.url} alt={serie.title} width="500" height="300" />
              <h1>{serie.title}</h1>
              <p>{serie.description}</p>

            </div>
            )
        })}

      </div>
    );
  }
}
export default Movies;