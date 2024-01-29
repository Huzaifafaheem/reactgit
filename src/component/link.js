import React from 'react'
import {Link}from "react-router-dom"
export default function link() {
  return (
    <div>
       <Link to ="/">about</Link><br/>
       <Link to ="/contact">contact</Link>
    </div>
  )
}
