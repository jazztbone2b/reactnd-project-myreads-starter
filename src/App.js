import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Header.js'
import CurrentlyReading from './CurrentlyReading.js'
import WantToRead from './WantToRead.js'
import Read from './Read.js'
import SearchButton from './SearchButton.js'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <CurrentlyReading />
        <WantToRead />
        <Read />
        <SearchButton />
      </div>
    )
  }
}

export default BooksApp
