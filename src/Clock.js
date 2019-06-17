import React from 'react';
import './App.css';

class Clock extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.timerID = null;
  }
  tick = () => {
    this.setState({
      date: new Date()
    });
  }
  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (<p>Hi {this.props.name}, it is {this.state.date.toLocaleTimeString()}.</p>);
  }
}

export default Clock;