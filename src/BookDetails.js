import React from 'react'
import './App.css'

class BookDetails extends React.Component {
    render() {
        return (
            <div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">
                    {this.props.authors.map((author)=>{
                       return (
                           <div key={author}>{author}</div>
                       )
                    })}
                </div>
            </div>
        )
    }
}
export default BookDetails
