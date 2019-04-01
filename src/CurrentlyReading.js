import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class CurrentlyReading extends Component {
    render() {
        return (
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>Currently Reading</h2>
                <div>Books I'm reading will go here</div>
                <ol>
                    {this.props.allBooks.map((book) => {
                        console.log(book)
                    })}
                </ol>
            </div>
        )
    }
}

export default CurrentlyReading;