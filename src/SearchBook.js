import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBookResult from './SearchBookResult';
import SearchBookBar from './SearchBookBar';


class SearchBook extends React.Component {

    render() {
        return (
            <div className="search-books">
                <SearchBookBar/>
                <SearchBookResult/>
            </div>
        )
    }
}

export default SearchBook
