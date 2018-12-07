import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import One from "./One/One";
import Four from "./Four";
import Three from "./Three";
import Two from "./Two";

export default function Home (props) {
  return<div className="full">
      <div className="content">
        <Link to='/one'><One /></Link>
        <Link to='/two'><Two/></Link>
        <Link to='/three'><Three/></Link>
        <Link to='/four'><Four/></Link>
      </div>
    </div>
}
