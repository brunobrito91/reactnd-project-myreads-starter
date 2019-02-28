import React from 'react';
import './App.css';
import Book from './Book';

class BookSearchResult extends React.Component {

    render() {
        const { result, onShelfChange } = this.props;
        return (
            result !== null ?
                <div className="search-books-results">
                    <ol className="books-grid">
                        {result.length > 0 ? result.map((book) => {
                            return (
                                <li key={book.title + "-" + book.id}>
                                    <Book
                                        book={book}
                                        onShelfChange={onShelfChange}
                                    />
                                </li>
                            )
                        }) : <div>No results</div>}
                    </ol>
                </div> : <div></div>
        )
    }
}

export default BookSearchResult