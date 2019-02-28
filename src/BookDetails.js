import React from 'react';
import './App.css';

class BookDetails extends React.Component {
    render() {
        const { title, authors } = this.props;
        return (
            <div>
                <div className="book-title">{title}</div>
                {authors !== undefined ?
                    <div className="book-authors">
                        {authors.map((author) => {
                            return (
                                <div key={author}>{author}</div>
                            )
                        })}
                    </div> : <div> </div>
                }
            </div>
        )
    }
}
export default BookDetails