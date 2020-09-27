import React from 'react';

class Series extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: []
    }
  }

  componentDidMount() {
    fetch('./data.json')
    .then((response) => { return response.json(); })
    .then((data) => { 

      console.log(data.data[1].category_id); 
        this.setState({series: data.data})
        
        
    })
}

  render() {

    return (
      <section className='section-series'>
        {
          this.state.series.filter(ele => ele.category_id === "movie").map((serie, i) => {
            return (
              <article className='series' key={i}>
                <img src={serie.images.url} alt={serie.title} width="500" height="300" />
                <h3>{serie.title}</h3>
                {/* <p>{serie.description}</p> */}
              </article>
            )})
            }
      </section>
    );
  }
}
export default Series;