import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class BookSearchBar extends React.Component {

    render() {
        const { query, onSearchInputChange } = this.props;
        return (
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => onSearchInputChange(event.target.value)} />
                </div>
            </div>
        )
    }
}

export default BookSearchBar