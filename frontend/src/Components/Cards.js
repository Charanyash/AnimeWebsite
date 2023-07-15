import React from 'react';

function Cards(props) {
    return (
        <>        
        <div className="row row-cols-1 row-cols-md-5 g-2">
      {props.cardlist.map((item,index) => (
           <div className="col" key={index}>
            <div className="card" style={{ width: '18rem', height: '100%' }}>
              <img src = {item.img_url} className="card-img-top" alt= {item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  {item.synopsis}
                </p>
              </div>
            </div>
          </div>))}
        </div>
        </>
        );
  }
  
  export default Cards;