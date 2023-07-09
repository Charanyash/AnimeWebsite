import React from "react";
const listData = ['Item 1', 'Item 2', 'Item 3', 'Item 1', 'Item 2', 'Item 3', 'Item 1', 'Item 2', 'Item 3', 'Item 1', 'Item 2', 'Item 3', 'Item 1', 'Item 2', 'Item 3'];
function Genre(){
    return(
        <>
        <ul className="list-group list-group-horizontal">
        {listData.map((item) => (
        <li className="list-group-item"><a href="https://example.com">{item}</a></li>
      ))}
      </ul>
        </>
    );
}

export default Genre;