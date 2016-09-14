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
      <div>
        <img src={this.props.data[this.state.viewableHiringPartner]} />
      </div>
    )
  }
}

export default App;
