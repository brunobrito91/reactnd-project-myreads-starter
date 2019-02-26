import React from 'react'
import './App.css'
import BookInformation from './BookInformation';

class BookShelf extends React.Component {

    render() {
        const { bookInformations } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {bookInformations.map((bookInformation) => {
                            return (
                                <li>
                                    <BookInformation title={bookInformation.title} author={bookInformation.authors} style={bookInformation.style} />
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
