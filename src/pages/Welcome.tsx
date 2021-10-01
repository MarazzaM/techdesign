import React from 'react'
import './Welcome.scss'
import {
    Link
  } from "react-router-dom";
import { motion } from "framer-motion"
  
function Welcome() {
    const pageTransition = {
        in: {
            opacity: 1 
        },
        out: {
            opacity: 0
        }
    }
    return (
        <motion.div className='welcome page centered' initial="out" animate="in" exit="out" variants={pageTransition}>
            <h1>Welcome</h1>
            <h3>to</h3>
            <h1>Tech Design</h1>
            <div className="button-container-2">
                  <span className="mas">Lets go!</span>
                  <Link to="/Home"> <button type="button" name="Hover">Get started!</button></Link>
            </div>
        </motion.div>
    )
}

export default Welcome
