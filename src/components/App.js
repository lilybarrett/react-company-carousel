import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewableHiringPartner: 0
    }
    this.changeHiringPartner = this.changeHiringPartner.bind(this)
  }

  changeHiringPartner() {
    if(this.state.viewableHiringPartner === this.props.data.length - 1) {
    this.setState({ viewableHiringPartner: 0 })
    } else {
      this.setState({ viewableHiringPartner: this.state.viewableHiringPartner + 1 });
    }
  };

  componentDidMount() {
    setInterval(this.changeHiringPartner, 2000);
  }

  render() {
    return(
      <div className="text-center">
        <div className="row">
          <div className="small-12 small-centered medium-6 medium-centered columns">
            <h1>Hiring Partners</h1>
          </div>
        </div>
        <div className="row">
          <div className="small-12 small-centered medium-6 medium-centered columns">
            <p>We work with the very best. We are proud of our partners, who work with us to deliver the best training.</p>
            <div className="carousel">
              <img src={this.props.data[this.state.viewableHiringPartner]} />
            </div>
          </div>
          </div>
      </div>
    )
  }
}

export default App;
