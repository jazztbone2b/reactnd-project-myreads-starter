import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Header.js'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
      </div>
    )
  }
}

export default BooksApp
