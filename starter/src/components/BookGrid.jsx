import React from 'react'

const BookGrid = ({books}) => {
   
  return ( 
books&&(
 books.map(b=> 
    
    <li>
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
                            <select>
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{b.title}</div>
                        <div className="book-authors">{b.authors}</div>
                      </div>
                    </li>
    
    
    
    ) 

)



)
    







  
}

export default BookGrid