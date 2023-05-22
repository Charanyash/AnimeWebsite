import React from 'react';

function Cards(props) {
    return (
        <>        
        <div className="row row-cols-1 row-cols-md-5 g-2">
      {props.cardlist.map((item,index) => (<div className="col">
            <div className="card" style={{ width: '18rem', height: '100%' }}>
              <img src = {item.url} className="card-img-top" alt="https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  {item.description}
                </p>
              </div>
            </div>
          </div>))}
        </div>
        </>
        );
  }
  
  export default Cards;