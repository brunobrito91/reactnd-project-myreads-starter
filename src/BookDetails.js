import React from 'react'
import './App.css'

class BookDetails extends React.Component {
    render() {
        return (
            <div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.author}</div>
            </div>
        )
    }
}
export default BookDetails
