import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import './App.css';

class BookSection extends React.Component {

    render() {
        const { books, shelfData, onShelfChange } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelfData.map(shelf => {
                            return (
                                <BookShelf
                                    key={shelf.type}
                                    title={shelf.title}
                                    books={books.filter((book) => (
                                        book.shelf === shelf.type
                                    ))}
                                    onShelfChange={onShelfChange} />
                            )
                        })}
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