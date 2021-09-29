import React from 'react'
import './Welcome.scss'
import {
    Link
  } from "react-router-dom";

function Welcome() {
    return (
        <div className='welcome page centered'>
            <h1>Welcome</h1>
            <h3>to</h3>
            <h1>Tech Design</h1>
            <div className="button-container-2">
                  <span className="mas">Lets go!</span>
                  <Link to="/Home"> <button type="button" name="Hover">Get started!</button></Link>
            </div>
        </div>
    )
}

export default Welcome
