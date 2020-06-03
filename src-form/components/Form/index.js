import React, { Component } from 'react';
import './style.css';

class index extends Component {
  state = {
    username: '',
    rank: '',
    position: '',
    username2: '',
    rank2: '',
    position2: '',
  };

  handleInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  submitFunction = (e) => {
    e.preventDefault();

    alert(
      `name: ${this.state.username} \n rank: ${this.state.rank} \n position: ${this.state.position}`
    );

    const currState = { ...this.state };

    this.setState({
      username: '',
      rank: '',
      position: '',
      username2: currState.username,
      rank2: currState.rank,
      position2: currState.position,
    });
  };

  render() {
    return (
      <>
        <h1> = Form Practice= </h1>
        <div>
          <form>
            <ul>
              <li>
                <input
                  value={this.state.username}
                  name="username"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="username"
                />
              </li>
              <li>
                <input
                  value={this.state.rank}
                  name="rank"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="rank"
                />
              </li>
              <li>
                <input
                  value={this.state.position}
                  name="position"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="position"
                />
              </li>
            </ul>
          </form>
          <button onClick={this.submitFunction}> Submit </button>
        </div>

        <div>
          <ul>
            <li>
              <p>Username: </p> {this.state.username} {this.state.username2}
            </li>
            <li>
              <p>Rank: </p> {this.state.rank2}
            </li>
            <li>
              <p>Position: </p> {this.state.position2}
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default index;
