import React from 'react';
import './App.css';
import BookSearchResult from './BookSearchResult';
import BookSearchBar from './BookSearchBar';
import * as BooksAPI from './BooksAPI';

class BookSearch extends React.Component {

    state = {
        query: "",
        result: []
    };

    bookSearch(query) {
        const { booksOnShelves } = this.props;
        BooksAPI.search(query)
            .then((books) => {
                books = books.error === undefined ? books.map(book => {
                    const bookOnShelf = booksOnShelves.find(bookOnShelf => {
                        return (bookOnShelf.id === book.id);
                    });
                    book.shelf = bookOnShelf ? bookOnShelf.shelf : 'none';
                    return book;
                }) : books;
                this.setState(() => ({
                    result: books.error === undefined ? books : []
                }))
            });
    }

    cleanSearchResult() {
        this.setState(() => ({
            result: []
        }));
    }

    onSearchInputChange = (query) => {
        this.setState(() => ({
            query: query
        }))
        query !== '' ? this.bookSearch(query) : this.cleanSearchResult();
    };

    render() {
        const { onShelfChange } = this.props;
        return (
            <div className="search-books">
                <BookSearchBar query={this.state.query} onSearchInputChange={this.onSearchInputChange} />
                <BookSearchResult result={this.state.query ? this.state.result : []} onShelfChange={onShelfChange} />
            </div>
        )
    }
}

export default BookSearch