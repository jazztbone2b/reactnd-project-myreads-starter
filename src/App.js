import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Header.js'
import CurrentlyReading from './CurrentlyReading.js'
import WantToRead from './WantToRead.js'
import Read from './Read.js'
import SearchButton from './SearchButton.js'
import SearchPage from './SearchPage.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
      <Router>
        <div className="app">
          <Switch>
            <Route exact path ='/'>
              <Header />
              <CurrentlyReading allBooks={this.state.allBooks}/>
              <WantToRead />
              <Read />
              <SearchButton />
            </Route>

            <Route exact path='/search' component={SearchPage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default BooksApp
