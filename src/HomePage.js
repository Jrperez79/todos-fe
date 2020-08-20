import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Log-In To See Your Todos List</h1>
                <Link to='/login'><p>Click Here To Log-In</p></Link>
            </div>
        )
    }
}
