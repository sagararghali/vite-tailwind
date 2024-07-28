import React from 'react'
import './side.css'
export default function Sidebar() {
  return (
    <>
    <div id="menuToggle">
  <input id="checkbox" type="checkbox"/>
  <label className="toggle" for="checkbox">
    <div className="bar bar--top"></div>
    <div className="bar bar--middle"></div>
    <div className="bar bar--bottom"></div>
  </label>
</div>
    </>
  )
}
