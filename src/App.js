import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Header.js'
import CurrentlyReading from './CurrentlyReading.js'
import WantToRead from './WantToRead.js'
import Read from './Read.js'
import SearchButton from './SearchButton.js'

class BooksApp extends React.Component {
  state = {
    allBooks: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
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
      <div className="app">
        <Header />
        <CurrentlyReading allBooks={this.state.allBooks}/>
        <WantToRead />
        <Read />
        <SearchButton />
      </div>
    )
  }
}

export default BooksApp
