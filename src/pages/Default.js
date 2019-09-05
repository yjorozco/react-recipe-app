import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
export default class Default extends Component {
    render() {
        return (
            <div>
                <Header title="404" StyleClass='default-hero'>
                    <h2 className="text-light text-uppercase">
                        You are in the wrong place
                    </h2>
                    <Link to="/" className="text-uppercase 
                    btn btn-secondary 
                    btn-lg mt-3" >
                        Return Home
                    </Link>
                </Header>
            </div>
        )
    }
}
