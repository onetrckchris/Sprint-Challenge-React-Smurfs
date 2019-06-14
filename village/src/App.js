import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response);
      this.setState({ smurfs: response.data });
    })
    .catch(error => {
      console.log(error);
    })
  }

  addSmurf = newSmurf => {
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      console.log(response);
      this.setState({ smurfs: response.data });
      this.props.history.push('/');
    })
    .catch(error => {
      console.log(error);
    })
  }

  deleteSmurf = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      this.setState({ smurfs: response.data})
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <Route exact path="/smurf-form" render={props => 
            <SmurfForm 
              {...props} 
              addSmurf={this.addSmurf} 
            />
          }>
        </Route>

        <Route exact path="/" render={props =>
            <Smurfs 
              {...props} 
              smurfs={this.state.smurfs} 
              deleteSmurf={this.deleteSmurf} 
            />
          }>
        </Route>
      </div>
    );
  }
}

export default App;
