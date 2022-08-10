import React from 'react'
import { useState, useEffect } from "react";
import {get, search,update} from "../BooksAPI";
import {Link} from 'react-router-dom'


const BookSearch = ({setShowSearchpage,showSearchPage}) => {
    const [Search, setSearch] = useState([]);
    const [input, setinput] = useState('');
    const [getid, setgetid] = useState();
    const [getData, setgetData] = useState({});
    const [id, setid] = useState('');
    const [shelf, setshelf] = useState('');
 
    useEffect(() => {
            
const searchbook = async (p)=>{
try{

    const data = await search(p)

    setSearch(data.items?undefined :data)
}catch(err){
}
  



}


       searchbook(input)
        } 
        , [input])

  useEffect(()=>{
update(id, shelf)

},[id,shelf])
  useEffect(()=>{
get(getid).then(e => setgetData(e) )

},[getid])



console.log(getData)


const handel = (e,b) =>{
  setid(e)
  setshelf(b)
}
const HandelSelect = (value, shelf)=>{

  if(value === shelf){
  
    return `✓${value}`
  }else{
    return value
  }}
  


console.log(getid)


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
                onChange={(e)=>  setinput(e.target.value) }
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">

{ Search ?

(Search.map(b=> 
    
    <li key={b.id}>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                                `url(${b.imageLinks? b.imageLinks.smallThumbnail:''})`,
                            }}
                          ></div>
                          <div className="book-shelf-changer">
                         
                          <select defaultValue={'none'} onChange={(e)=>  handel(b, e.target.value)}
                             onClick={(e) => setgetid(b.id)}
                              >
                                <option value="none" disabled>Move to...</option>
                                
                                <option></option>
                                
                                 
                                
                               
                               
                                <option value="wantToRead"> {HandelSelect("wantToRead",getData.shelf)} </option>
                              <option value="currentlyReading">{HandelSelect("currentlyReading",getData.shelf)} </option>
                                <option value="read"  >{HandelSelect("read",getData.shelf)}</option>
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

export default BookSearch