import React, { Component } from 'react';
import Axios from 'axios';
import './style.css';

export default class Person extends Component {
  state = {
    search: '',
    rando: [],
  };

  // this will load up the api automatically when the page loads
  componentDidMount = () => {
    Axios.get(`https://randomuser.me/api/?results=15`).then((resp) => {
      console.log(resp);
      this.setState({ rando: resp.data.results });
    });
  };
  // new search button function
  newSearch = () => {
    this.componentDidMount();
  };

  // to handle changes in the input field
  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(
      {
        [name]: value,
      },
      this.searchFunction
    );
  };

  // function to search for person
  searchFunction = () => {
    console.log(this.state.search);

    if (this.state.search === '') {
      this.newSearch();
    }

    let searches = this.state.rando.filter((res) => {
      if (
        res.name.first.includes(this.state.search) ||
        res.name.last.includes(this.state.search) ||
        res.phone.includes(this.state.search)
      ) {
        return res;
      }
    });
    this.setState({ rando: searches });
  };

  // to render our page
  render = () => {
    return (
      <>
        <h1> Employee Directory </h1>
        <form>
          <div className="form-group">
            <label htmlFor="search">
              {' '}
              Search by: first name, last name, or phone #{' '}
            </label>

            <input
              onChange={this.handleInputChange}
              value={this.state.search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Case Sensitive"
              id="search"
            />
            <br />
            <button onClick={this.newSearch} className="btn btn-info">
              New Search
            </button>
            <br />
          </div>
        </form>

        <table className="table table-striped">
          <thead>
            <tr>
              <th> Image: </th>
              <th> Name: </th>
              <th> Email: </th>
              <th> Phone: </th>
              <th> DOB: </th>
            </tr>
          </thead>
          <tbody>
            {this.state.rando.map((person) => (
              <tr key={person.login.uuid}>
                <td>
                  <img src={person.picture.thumbnail} alt=""></img>
                </td>
                <td>
                  {person.name.first} {person.name.last}{' '}
                </td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td>{person.dob.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };
}
