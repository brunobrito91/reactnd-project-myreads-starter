import React from 'react'
import './App.css'
import BookDetails from './BookDetails';

class BookInformation extends React.Component {

    onShelfChange = (event) => {
        this.props.onShelfChange(this.props.id, event.target.value);
    };

    render() {
        const { title, authors, thumbnail, shelf } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={
                        {
                            width: 128, 
                            height: 192,
                            backgroundImage:"url(" + thumbnail + ")"
                        }    
                    }
                    />
                    <div className="book-shelf-changer">
                        <select value={shelf} onChange={this.onShelfChange}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <BookDetails title={title} authors={authors} />
            </div>
        )
    }
}

export default BookInformation
