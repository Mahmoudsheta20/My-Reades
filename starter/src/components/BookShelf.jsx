import React from 'react'
import { useState, useEffect} from "react";
import {AllData, Update} from './bookapi'


const BookShelf = ({titel}) => {

  const [all, setall] = useState([]);
const [id, setid] = useState('');
const [shelf, setshelf] = useState('');
useEffect (() => {


console.log('useEffect')

AllData().then(data => setall((data)))
    }

    , [all])



useEffect(()=>{

  Update(id,shelf)

},[id,shelf])







  let datas =   all.filter(e => e.shelf === titel)





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

  return (

 

  <div className="bookshelf">
                <h2 className="bookshelf-title">{titel}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {datas.map(m => (


 <li key={m.id}   >
                      <div  className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                              `url(${m.imageLinks.smallThumbnail})`,
                            }}
                          ></div>
                          <div className="book-shelf-changer">





                          <select defaultValue={'none'} onChange={(e)=>  handel(m, e.target.value)}
                              
                              >
                                <option value="none" disabled>Move to...</option>
                                
                                <option></option>
                                
                                 
                                
                               
                               
                                <option value="wantToRead"> {HandelSelect("wantToRead",m.shelf)} </option>
                              <option value="currentlyReading">{HandelSelect("currentlyReading",m.shelf)} </option>
                                <option value="read"  >{HandelSelect("read",m.shelf)}</option>
                                <option value="none">None</option>
                              </select>
                          </div>
                        </div>
                        <div className="book-title">{m.title}</div>
                        <div className="book-authors">{m.authors}</div>
                      </div>
                    </li>

                  )) }
                   
                    
                    
                  </ol>
                </div>
              </div>
    
  )
         
       
      
    
   
   
  
}

export default BookShelf