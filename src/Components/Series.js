import React from 'react';
import Loading from './Loading';

class Series extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      series: []
    }
  }

  componentDidMount() {
    fetch('./data.json')
    .then((response) => { return response.json(); })
    .then((data) => { 

      console.log(data.data[1].category_id); 
        this.setState({series: data.data, loading: false})
        
        
    })
}

  render() {

    return (
      <section className='section-series'>
          {
            this.state.loading || !this.state.series ? (
              <Loading />
            ) : (
            <div className='container'>
                  {
                    this.state.series.filter(ele => ele.category_id === "serie").map((serie, i) => {
                      return (
                        <article className='series' key={i}>
                    <img src={serie.images.url} alt={serie.title} width="500" height="300" />
                    <h3>{serie.title}</h3>
                    {/* <p>{serie.description}</p> */}
                  </article>
                )})
              }
            </div>
          )
        }
      </section>
    );
  }
}
export default Series;