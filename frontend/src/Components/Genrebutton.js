import React from 'react'
import "./genrebutton.css"

const Genrebutton = (props) => {
  return (
    <button type="button" class="btn btn-primary">{props.genre}<span class="close">x</span></button>
  )
}

export default Genrebutton
