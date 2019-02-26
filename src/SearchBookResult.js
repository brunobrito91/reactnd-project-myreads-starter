import React from 'react'
import './App.css'

class SearchBookResult extends React.Component {

    render() {
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    <li>Test 1</li>
                    <li>Test 2</li>
                    <li>Test 3</li>
                    <li>Test 4</li>
                </ol>
            </div>
        )
    }
}

export default SearchBookResult