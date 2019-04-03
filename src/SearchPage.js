import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchPage extends React.Component {
    state = {
        allBooks: []
    }
    componentDidMount() {
        BooksAPI.getAll()
          .then((allBooks) => {
            this.setState(() => ({
              allBooks
            }))
          })
    }
    render() {
        return (
            <div className='search-book-bar'>
                <div className="search-books-bar">
                    <Link to={{
                        pathname: '/'
                    }}>
                        <button className="close-search">Close</button>
                    </Link>

                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"/>
                    </div>
                </div>
                
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.allBooks.map((book) => (
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

export default SearchPage;