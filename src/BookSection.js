import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import './App.css'
import * as BooksAPI from './BooksAPI'

class BookSection extends React.Component {
    state = {
        books: []
    }
    
    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books : books
                }))
            })
    }

    onShelfChange = (id, shelf) =>{
        BooksAPI.update({id:id}, shelf)
            .then(() => {
                var book = this.state.books.filter((book) => (book.id === id)).map(book =>{
                    book.shelf = shelf;
                    return book;
                });
                this.setState(() => ({
                    books : this.state.books.filter((book) => (book.id !== id)).concat(book)
                }))
            })
    };

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf 
                            title="Currently Reading" 
                            bookInformations={this.state.books.filter((book) =>(
                                book.shelf === "currentlyReading"
                            ))} 
                            onShelfChange={this.onShelfChange}/>
                        <BookShelf 
                            title="Want to Read" 
                            bookInformations={this.state.books.filter((book) =>(
                                book.shelf === "wantToRead"
                            ))} 
                            onShelfChange={this.onShelfChange}/>
                        <BookShelf 
                            title="Read" 
                            bookInformations={this.state.books.filter((book) =>(
                                book.shelf === "read"
                            ))} 
                            onShelfChange={this.onShelfChange}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link className="open-search" to='/search'>Add a book</Link>
                </div>
            </div >
        )
    }
}

export default BookSection
