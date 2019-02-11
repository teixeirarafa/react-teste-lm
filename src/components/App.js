import React, { Component } from 'react';

import '../css/App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import LinkList from './LinkList';
import * as LinksAPI from '../service/LinksAPI';

class App extends Component {
  state = {
    links: [],
    query: ''
  }
  
  generateId () {
    return Math.random().toString(36).substring(2);
  }

  updateQuery = (query) => {
    this.setState(() => ({
        query: query.trim() 
    }))
  }

  clearQuery = () => {
    this.updateQuery('')
  }

  componentDidMount(){
    LinksAPI.getAll()
      .then((links) => {
        links.map((l) => (
          Object.defineProperty(l, 'id', {value: this.generateId()})
        ))
        this.setState(() => ({
          links
        }))
      })
  }

  addUpvotes = (linkChanged) => {
    linkChanged.upvotes ++   
    this.setState(prevState => ({
        links: prevState.links
          .filter(link => link.id !== linkChanged.id)
          .concat(linkChanged)
      })); 
  }  

  render() {
    const { links, query } = this.state
    const showingLinks = query === ''
      ? links.sort((a, b) => (b.upvotes - a.upvotes))
      : links.filter((link) => (
        link.comments.toString().includes(query.toString()) + link.upvotes.toString().includes(query.toString())
      ))

    return (
      <div className="App">
        <div className="container w-75">
          <NavBar 
            query={query}
            updateQuery={this.updateQuery}
          />
          <hr/>

          {showingLinks.length !== links.length && (
            <div className='showing-contacts'>
                <span>Now showing {showingLinks.length} of {links.length}</span>
                <button 
                  type="button"
                  onClick={this.clearQuery}
                  className="btn btn-light ml-2 text-danger">
                  Show all
                </button>
            </div>
          )}

          <div className="list-group mt-5">
            {showingLinks.map(link => (
              <LinkList
                key={link.id}
                link={link}
                addUpvotes={this.addUpvotes}
              />
            ))}        
            <button type="button" className="btn btn-light mt-4 py-3 text-danger">
              <i className="fas fa-sync-alt mr-3"></i>Load more
            </button>			
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
