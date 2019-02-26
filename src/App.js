import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import SearchBook from './SearchBook';
import BookSection from './BookSection';

class BooksApp extends React.Component {
  
  render() {
    return (
      <div className="app">
        <Route exact path='/' component={BookSection}/>
        <Route exact path='/search' component={SearchBook}/>  
      </div>
    )
  }
}

export default BooksApp
