import React, { Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: new Date()
        };

    }
    render() {
        return (
          <div>
            <h1>Привет, мир!</h1>
            <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
}

export default Clock;