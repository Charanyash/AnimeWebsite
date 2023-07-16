import React, {useState} from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import SearchResultCard from './SearchResultCard'
// import { createRoot } from 'react-dom/client';



function Search() {


  const ChangeSearch = (event)=>{
      setName(event.target.value) 
  }
  
  const [name,setName] = useState('');
  const [tags,setTags] = useState([]);
  const [results,setResults] = useState([]);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
    console.log(tags);
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
    console.log(tags);
  };


  const PostSearchData = async (e)=>{

    e.preventDefault()

    const res = await fetch("/search/searchgenre",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,tags
      })
    });

    const data = await res.json();

    if(res.status===400 || !data){
      window.alert(res.message)
    }
    else{
      console.log(data);
      
      var ps = document.getElementsByClassName('changeb')
      console.log(data.synopsis[0])
      ps.value = data.synopsis[0]
      
      var bs = document.getElementsByClassName('changeb')
      bs.value = data.titles[0]

      var is = document.getElementsByClassName('changei')
      is.src = data.imgs[0]
      setResults(data)
    }

  }

  return (
    <>
   <section className="vh-100 bg-image">
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style= {{borderRadius: "15px"}}>
              <div className="card-body p-5">
                <h2 className="text-center mb-5">Search Page</h2>
  
                <form method="POST">
  
                  <div className="form-outline mb-4">
                  <label className="form-label" forhtml="Search">Search</label>
                    <input type="text" id="search" className="form-control form-control-lg" name = "search" value={name} onChange={ChangeSearch}/>
                    
                  </div>
  
                  <div className="form-outline mb-4">
                  <label className="form-label" forhtml="Search">Genres</label>
                  <ReactTags
                    tags={tags}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    delimiters={[32,188]}
                    />
                  </div>


                  <div className="d-flex justify-content-center">
                    <button type= "submit"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={PostSearchData}>Search</button>
                  </div>


                  <div className=" justify-content-space-between" style={{width:'20rem',height:'6rem'}}>
                    <img 
                    id='changei'
                     alt="Card image cap"
                     style={{height:'6rem',width:'5rem',float:'left',paddingRight:'0.4rem'}}
                     />
                     <b style={{fontSize:'0.9rem'}} id='changeb'></b>
                     <p id='changep' ></p>
                  </div>

                </form>
                <SearchResultCard data={results}></SearchResultCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    
    
    
    </>
  )
}

export default Search;