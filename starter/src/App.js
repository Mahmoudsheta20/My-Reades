import './App.css'
import BookSearch from './components/BookSearch'
import BookShelf from './components/BookShelf'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
    return ( <
        div className = 'app' >
        <
        Routes >
        <
        Route path = '/search'
        element = { < BookSearch / > }
        />{' '} <
        Route exact path = '/*'
        element = { <
            div className = 'list-books' >
            <
            div className = 'list-books-title' >
            <
            h1 > MyReads < /h1>{' '} <
            /div>{' '} <
            div className = 'list-books-content' >
            <
            div >
            <
            BookShelf titel = { 'wantToRead' }
            />{' '} <
            BookShelf titel = { 'currentlyReading' }
            />{' '} <
            BookShelf titel = { 'read' }
            />{' '} <
            /div>{' '} <
            /div>{' '} <
            div className = 'open-search' >
            <
            Link to = { '/search' } > Add a book < /Link>{' '} <
            /div>{' '} <
            /div>
        }
        />{' '} <
        /Routes>{' '} <
        /div>
    )
}

export default App