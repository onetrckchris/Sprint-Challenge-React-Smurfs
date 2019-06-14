import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

const SmurfsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

class Smurfs extends Component {
  render() {
    return (
      <SmurfsContainer>
        {this.props.smurfs.map(smurf => {
          return (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
              deleteSmurf={this.props.deleteSmurf}
            />
          );
        })}
      </SmurfsContainer>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
