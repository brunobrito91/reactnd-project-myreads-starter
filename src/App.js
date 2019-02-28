import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import BookSearch from './BookSearch';
import BookSection from './BookSection';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {

    state = {
        books: []
    }

    shelfData = [
        { title: "Currently Reading", type: "currentlyReading" },
        { title: "Want to Read", type: "wantToRead" },
        { title: "Read", type: "read" }
    ]

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books: books
                }));
            });
    }

    onShelfChange = (bookChanged, shelf) => {
        BooksAPI.update(bookChanged, shelf)
            .then(() => {
                bookChanged.shelf = shelf;
                var inalteredBooks = this.state.books.filter((book) => (book.id !== bookChanged.id))
                this.setState(() => ({
                    books: inalteredBooks.concat(bookChanged)
                }));
            });
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => <BookSection books={this.state.books} shelfData={this.shelfData} onShelfChange={this.onShelfChange} />} />
                <Route exact path='/search' render={() => <BookSearch booksOnShelves={this.state.books} onShelfChange={this.onShelfChange} />} />
            </div>
        )
    }
}

export default BooksApp