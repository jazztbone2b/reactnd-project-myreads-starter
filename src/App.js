import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Header.js'
import CurrentlyReading from './CurrentlyReading.js'
import WantToRead from './WantToRead.js'
import Read from './Read.js'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <CurrentlyReading />
        <WantToRead />
        <Read />
      </div>
    )
  }
}

export default BooksApp
