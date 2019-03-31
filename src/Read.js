import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Read extends Component {
    render() {
        return (
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>Read</h2>
                <div>Books I have read will go down here</div>
            </div>
        )
    }
}

export default Read;