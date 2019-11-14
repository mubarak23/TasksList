import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
const Navigation = () =>{
    return (
    <div>
        <Link to="/dashboard">
            <h2>
                My Application
            </h2>
        </Link>
    </div>
    )
}

export const ConnectedNavigation = connect(state =>state)(Navigation);


 //export  ConnectedNavigation;
