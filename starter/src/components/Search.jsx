import React from 'react'
import { useState, useEffect } from "react";
import {search,update} from "../BooksAPI";
import {Link} from 'react-router-dom'


const Search = ({setShowSearchpage,showSearchPage}) => {
    const [searchs, setsearchs] = useState([]);
    const [state, setstate] = useState('');
    const [id, setid] = useState('');
const [shelf, setshelf] = useState('');
 
    useEffect(() => {
            
const searchbook = async (p)=>{
try{

    const data = await search(p)

    setsearchs(data.items?undefined :data)
}catch(err){
}
  



}


       searchbook(state)
        } 
        , [state])

  useEffect(()=>{
  console.log('uselayouteffect')

const updatebook = (id,shelf) =>{

const x =  update(id, shelf)
setstate(x)


}
updatebook(id,shelf)

},[id,shelf])





const handel = (e,b) =>{
  setid(e)
  setshelf(b)
}






  return (
    <div className="search-books">
          <div className="search-books-bar">
          <Link className="close-search" to={'/'}>
   Close
          </Link>
          
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={(e)=>  setstate(e.target.value) }
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">

{ searchs ?

(searchs.map(b=> 
    
    <li key={b.id}>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                                `url(${b.imageLinks.smallThumbnail})`,
                            }}
                          ></div>
                          <div className="book-shelf-changer">
                          <select  onChange={(e)=>  handel(b, e.target.value)}
                            
                            >
                              <option value="none" disabled>Move to...</option>
                              
                              <option></option>
                              
                               
                              
                             
                             
                              <option value="wantToRead">Want to Read</option>
                            <option value="currentlyReading"> Currently Reading</option>
                              <option value="read"  >Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{b.title}</div>
                        <div className="book-authors">{b.authors}</div>
                      </div>
                    </li>
    
    
    
    )


):
<h2>not found</h2>



 }




            </ol>
          </div>
        </div>
  )
}

export default Search