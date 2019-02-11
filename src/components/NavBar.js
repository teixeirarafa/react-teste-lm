import React, { Component } from 'react';
import PropTypes from 'prop-types'

class NavBar extends Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
    updateQuery: PropTypes.func.isRequired
  }

  render(){
    const { query, updateQuery } = this.props

    return(
        <nav className="navbar navbar-light mb-2">
            <div className="row w-100">              
              <code className="text-danger h2 mx-1 pl-3">&#x2B22;</code>
              <small id="text-logo" className="text-white" >UX</small>
              <div className="col-1 ml-4 border-left">
                <button type="button" className="btn fas fa-bars border border-light bg-white rounded p-2"></button>
              </div>
              <div className="col-6">
                <div className="input-group w-75">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-light border-0"><i className="fas fa-search"></i></span>
                  </div>
                  <input
                    className="form-control bg-light border-0" 
                    type="search" 
                    placeholder="Search" 
                    value={ query }
                    onChange={(event) => updateQuery(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-auto">
                <div className="input-group badge-danger border border-danger rounded" >
                  <div className="input-group-prepend">
                    <button className="btn fas fa-plus bg-danger text-white p-2"></button>
                  </div>
                  <div className="bg-danger p-1 border-left px-3">Add post</div>
                </div>
              </div>
              <div className="col-auto px-0">					
                <div>
                  <span className="badge badge-danger badge-pill" id="notification">5</span>
                  <i className="fas fa-user fa-2x"></i>
                </div>
              </div>				
            </div>
        </nav>
    )
  } 
}

export default NavBar