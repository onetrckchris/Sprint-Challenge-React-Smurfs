import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Form = styled.form`
    background-color: white;
    width: 15rem;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: auto;
    margin-top: 25px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
`;

const SmurfInput = styled.input`
    height: 1.5rem;
    padding: 5px;
    font-size: 1.1rem;
    border: 1px solid #dbdbdb;
    margin-bottom: 10px;
    border-radius: 5px;
    outline: none;

    ${props => props.addButton && css`
        height: 2rem;     

        &:hover {
            background-color: #dbdbdb;
            color: white;
            cursor: pointer;
        }
    `}
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();

    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }

    this.props.addSmurf(newSmurf);

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <Form onSubmit={this.addSmurf}>
          <SmurfInput
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <SmurfInput
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <SmurfInput
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <SmurfInput addButton type="submit" value="Add to the village" />
        </Form>
      </div>
    );
  }
}

export default SmurfForm;
