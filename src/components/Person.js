import React, { Component } from 'react';
import Axios from 'axios';
// import API from '../utils/API';

class Person extends Component {
  state = {
    result: {},
    search: '',
    rando: [],
    sortBy: "name",
    sortDir: "asc"
  };

  makeAPICall(sortBy){
    if(this.state.sortDir === "asc"){

    }
    this.setState({sortBy: sortBy})
  }

  // searchPerson = (query) => {
  //   API.search(query)
  //     .then((res) => this.setState({ result: res.data }))
  //     .catch((err) => console.log(err));
  // };

  // === student === This will load up the api automatically when the page loads
  componentDidMount() {
    // this.searchPerson('');

    Axios.get(`https://randomuser.me/api/?results=10`).then((resp) => {
      console.log(resp);
      this.setState({ rando: resp.data.results });
    });
  }

  // === student ===
  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // === student === When the form is submitted, search the Movie API for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchPerson(this.state.search);
  };

  render() {
    return (
      <>
        <h1> Employee Directoryy </h1>
        <form>
          <div className="form-group">
            <label htmlFor="search">Search:</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search For a person"
              id="search"
            />
            <br />
            <button onClick={this.handleFormSubmit} className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
        

        <table className="table table-striped">
          <thead>
            <tr>
              <th> Image:</th>
              <th onClick={() => this.makeAPICall("Name")}> Name: </th>
              <th> Email: </th>
              <th> Phone: </th>
              <th> DOB: </th>
            </tr>
          </thead>
          <tbody>
          
            {this.state.rando.map((person)=>(
              <tr key={person.login.uuid}>
                <td><img src={person.picture.thumbnail} alt=""></img></td>
                <td>{person.name.first} {person.name.last}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td>{person.dob.date}</td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </>
    );
  }
}

export default Person;
