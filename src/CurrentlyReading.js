import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class CurrentlyReading extends Component {
    render() {
        return (
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>Currently Reading</h2>
                <div className='bookshelf-books'>
                    <ol className='books-grid'>
                        {this.props.allBooks.map((book) => (
                            <div className='book'>
                                <div className=''>
                                    <li key={book.id}>
                                        <img className='book-cover' src={book.imageLinks.thumbnail} />
                                        <div className="book-shelf-changer">
                                            <select>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                        <div className='book-title'>{book.title}</div>
                                        <div className='book-authors'>{book.authors}</div>
                                    </li>
                                </div>
                            </div>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default CurrentlyReading;