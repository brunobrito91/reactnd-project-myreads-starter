import React from 'react'
import './App.css'
import BookDetails from './BookDetails';

class BookInformation extends React.Component {

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={this.props.style}></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <BookDetails title={this.props.title} author={this.props.author} />
            </div>
        )
    }
}

export default BookInformation
