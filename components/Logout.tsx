import React from 'react'
import {Link} from "react-router-dom";
const Logout = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h3 style={{color:"red"}}>You have been Loggedout</h3>
      <Link to="/">Login</Link>
    </div>
  )
}

export default Logout;