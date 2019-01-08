import React from 'react';

export default class Loading extends React.Component {
  state = {
      text: 'Loading',
    }
  componentDidMount(){
    this.animation = setInterval(this.animate, 250);
  }
  componentWillUnmount(){
    clearInterval(this.animation);
  }
  animate = () => {
    this.setState((prevState) => {
      return {
        text: prevState.text.includes('...') ? 'Loading' : prevState.text + '.',
      };
    });
  }
  render(){
    return <h2>{this.state.text}</h2>
  }
}