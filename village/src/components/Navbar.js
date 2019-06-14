import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SmurfNav = styled.nav`
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
`;

const SmurfYell = styled.h1`
    margin: 0;
`;

const SmurfDirections = styled(NavLink)`
    text-decoration: none;
    color: black;
    margin: 0px 5px;

    &:hover {
        border-bottom: 1px solid black;
    }
`;

const Navbar = () => {
    return (
        <SmurfNav>
            <SmurfYell>Smurf Village</SmurfYell>
            <div>
                <SmurfDirections to="/">Smurfs</SmurfDirections>{' | '}
                <SmurfDirections to="/smurf-form">Add Smurf</SmurfDirections>
            </div>
        </SmurfNav>
    )
}

export default Navbar;