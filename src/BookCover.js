import React from "react";

class BookCover extends React.Component {

    render() {
        const { thumbnail, width, height } = this.props;
        return (
            <div className="book-cover" style={
                {
                    width: width,
                    height: height,
                    backgroundImage: "url(" + thumbnail + ")"
                }
            }
            />
        )
    }
}

export default BookCover