import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class WantToRead extends Component {
    render() {
        return (
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>Want to Read</h2>
                <div>Books I want to read will go here</div>
            </div>
        )
    }
}

export default WantToRead;