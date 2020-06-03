import React, { Component } from 'react';
import Axios from 'axios';
// import API from '../utils/API';

class Person extends Component {
  state = {
    result: {},
    search: '',
    people: [],
    photo:[],
    rando: []
  };

  // searchPerson = (query) => {
  //   API.search(query)
  //     .then((res) => this.setState({ result: res.data }))
  //     .catch((err) => console.log(err));
  // };

  // === student === When this component mounts, search the Movie API for info
  componentDidMount() {
    // this.searchPerson('');

    // Axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
    //   console.log(res);
    //   this.setState({ people: res.data });
    // });

    // Axios.get(`https://jsonplaceholder.typicode.com/photos`).then((result) => {
    //   console.log(result);
    //   this.setState({ photo: result.data });
    // });

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
        <h1> Employee Directory </h1>
        <form>
          <div className="form-group">
            <label htmlFor="search">Search:</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.value}
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
              <th> Name: </th>
              <th> Email: </th>
              <th> Phone: </th>
              <th> DOB: </th>
            </tr>
          </thead>
          <tbody>
            
            {/* <tr>
              <td> </td>
              <td> Emily T. </td>
              <td> 703 - 830 - 8300 </td>
              <td> ETphonehome@gmail.com </td>
              <td> 02-27-1992 </td>
            </tr>
            <tr>
              <td> </td>
              <td> {this.state.search} </td>
              <td> </td>
              <td> </td>
            </tr> */}

            {/* <tr>
              <td>
                {this.state.photo.slice(0,10).map((photo) => (
                  <li key={photo.id}><img src={photo.thumbnailUrl}></img></li>
                ))}
              </td>
              <td>
                {this.state.people.map((person) => (
                  <li key={person.id}>{person.name}</li>
                ))}
              </td>
              <td>
                {this.state.people.map((person) => (
                  <li key={person.id}>{person.phone}</li>
                ))}
              </td>
              <td>
                {this.state.people.map((person) => (
                  <li key={person.id}>{person.email}</li>
                ))}
              </td>
              <td>
                {this.state.people.map((person) => (
                  <li key={person.id}>{person.company.name}</li>
                ))}
              </td>
            </tr> */}
            <tr>
            <td>
                {/* {this.state.rando.map((person) => (
                  <li key={person.login.uuid}><img src={person.picture.thumbnail} alt=""></img></li>
                ))} */}
              </td>
              <td>
                {this.state.rando.map((person) => (
                  <li key={person.login.uuid}>{person.name.first} {person.name.last} </li>
                ))}
              </td>
              <td>
                {this.state.rando.map((person) => (
                  <li key={person.login.uuid}>{person.email}</li>
                ))}
              </td>
              <td>
                {this.state.rando.map((person) => (
                  <li key={person.login.uuid}>{person.phone}</li>
                ))}
              </td>
              <td>
                {this.state.rando.map((person) => (
                  <li key={person.login.uuid}>{person.dob.date}</li>
                ))}
              </td>
              
              
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Person;
