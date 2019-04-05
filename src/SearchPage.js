import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchPage extends React.Component {
    static PropTypes = {
        allBooks: PropTypes.array.isRequired
    }
    state = {
        query: ''
    }
    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))
    }
    clearQuery = () => {
        this.setState(() => {
            this.updateQuery('')
        })
    }
    render() {
        const { query } = this.state
        const { allBooks } = this.props

        const showingBooks = query === ''
            ? allBooks
            : allBooks.filter((book) => (
                book.title.toLowerCase().includes(query.toLowerCase())
            ))

        return (
            <div className='search-book-bar'>
                <div className="search-books-bar">
                    <Link to={{
                        pathname: '/'
                    }}>
                        <button className="close-search">Close</button>
                    </Link>

                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                            />
                    </div>
                </div>

                 //change UI based on the query string
                {showingBooks.length !== allBooks.length ? (
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {showingBooks.map((book) => (
                                <div className='book' key={book.id}>
                                    <div className=''>
                                        <li>
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
                ) : 
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {allBooks.map((book) => (
                                <div className='book' key={book.id}>
                                    <div className=''>
                                        <li>
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
                } 
            </div>
        )
    }
}

export default SearchPage;