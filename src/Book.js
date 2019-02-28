import React from 'react';
import './App.css';
import BookDetails from './BookDetails';
import BookCover from './BookCover';
import ShelfChanger from './ShelfChanger';

class Book extends React.Component {

    render() {
        const { book, onShelfChange } = this.props;
        const thumbnail = book.imageLinks !== undefined ? book.imageLinks["thumbnail"] : null;
        return (
            <div className="book">
                <div className="book-top">
                    <BookCover thumbnail={thumbnail} width={128} height={192} />
                    <ShelfChanger book={book} onShelfChange={onShelfChange} />
                </div>
                <BookDetails title={book.title} authors={book.authors} />
            </div>
        )
    }
}

export default Book