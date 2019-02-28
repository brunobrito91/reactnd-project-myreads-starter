import React from 'react';

class ShelfChanger extends React.Component {

    onShelfChange = (event) => {
        this.props.onShelfChange(this.props.book, event.target.value);
    };

    render() {
        const { book } = this.props;
        return (
            <div className="book-shelf-changer">
                <select value={book.shelf} onChange={this.onShelfChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ShelfChanger