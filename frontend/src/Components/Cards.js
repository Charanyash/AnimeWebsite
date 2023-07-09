import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'


function Cards(props) {
  const [page, setPage] = useState(1);
  const perPage = 6;
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedCards = props.cardlist.slice(startIndex, endIndex);
    return (
        <>        
        <div className="row row-cols-1 row-cols-md-6 g-2">
      {paginatedCards.map((item,index) => (<div className="col" key={index}>
            <div className="card" style={{ width: '12rem', height: '100%' }}>
            <Link className='link' to={`/anime/${item.title}`}>
              <img src = {item.url} className="card-img-top" alt="https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg" />
              <div className="card-body">
                
                <h5 className="card-title">{item.title}</h5>
                {/* <p className="card-text">
                  {item.description}
                </p> */}
              </div>
              </Link>
            </div>
          </div>))}
          </div>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Previous
          </button>
          <button onClick={() => setPage(page + 1)} disabled={endIndex >= props.cardlist.length}>
            Next
          </button>
        
        </>
        );
  }
  
  export default Cards;