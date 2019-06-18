import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SmurfWrapper = styled.div`
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 1rem;
    width: 15rem;
    margin: 25px;
    display: flex;
    flex-direction: column;
    background-color: white;
`;

const SmurfButton = styled.div`
  width: 12px;
  margin-left: auto;
  cursor: pointer;
`;

const SmurfName = styled.h3`
  margin-top: 0;
`;

const Smurf = props => {
  return (
    <div>
      <SmurfWrapper>
        <SmurfButton onClick={event => props.deleteSmurf(event, props.id)}>X</SmurfButton>
        <SmurfName>{props.name}</SmurfName>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </SmurfWrapper>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

