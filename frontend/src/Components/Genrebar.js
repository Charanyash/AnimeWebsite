import React from 'react'
import Genrebutton from './Genrebutton'

const Genrebar = (props) => {


  var genrebar = document.getElementsByClassName("genrebar");
  var j;

  if(props.genres.length!==0)console.log(props.genres)
  // for(j=0;j<props.genres.length;j++){
  //   console.log(props.genres[j])
  //   var newDiv = document.createElement("Genrebutton")
  //   const newContent = document.createTextNode(`${props.genres[j]}`);
  //   newDiv.appendChild(newContent);
  //   genrebar.appendChild(newDiv)
  // }



  var closebtns = document.getElementsByClassName("close");
  var i;

  for (i = 0; i < closebtns.length; i++) {
      closebtns[i].addEventListener("click", function() {
        this.parentElement.style.display = 'none';
      });
    }


  return (<>
    <h3>Selected Genres:</h3>

    <div className="genrebar"></div>

    </>
  )
}

export default Genrebar
