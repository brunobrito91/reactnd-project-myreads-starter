import React from 'react'
import './App.css'
import BookInformation from './BookInformation';

class BookShelf extends React.Component {

    render() {
        const { title, bookInformations, onShelfChange } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {bookInformations.map((bookInformation) => {
                            return (
                                <li key={bookInformation.title + "-" + bookInformation.id}>
                                    <BookInformation
                                        id={bookInformation.id}
                                        title={bookInformation.title} 
                                        authors={bookInformation.authors} 
                                        thumbnail={bookInformation.imageLinks["thumbnail"]}
                                        shelf={bookInformation.shelf}
                                        onShelfChange={onShelfChange}
                                    />
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf
