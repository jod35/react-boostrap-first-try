import React from 'react';
import { Link } from 'react-router-dom';

const Home=()=>{
    return (
        <div className="home container">
            <h1>Welcome To The Recipes App</h1>
            <br></br>
            <Link to="/signup" className="btn btn-primary text-center">Get Started</Link>
        </div>
    )
}

export default Home