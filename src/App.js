import './App.css';
import {
        BrowserRouter as Router,
        Route,
        Link,
        Routes
        } from 'react-router-dom';
import React from 'react' 

import Home from './components/Home';
import Header from './components/Header'
import BlogList from  './components/BlogList';
import BlogCreate from './components/BlogCreate';
import BlogUpdate from './components/BlogUpdate';
import BlogDetails from './components/BlogDetails';
import BlogSearch from './components/BlogSearch'

function App() {
  return (
    <div className="App">
      
        <Header />
        {/* <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">List</Link></li>
            <li><Link to="/create">Create</Link></li>
            <li><Link to="/update">Update</Link></li>
            <li><Link to="/details">Details</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul>
          <Routes>
            <Route path="/list">
              <BlogList />
            </Route>
            <Route path="/create">
              <BlogCreate />
            </Route>
            <Route path="/update">
              <BlogUpdate />
            </Route>
            <Route path="/details">
              <BlogDetails />
            </Route>
            <Route path="/search">
              <BlogSearch />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Routes>
        </Router> */}
      
    </div>
  );
}

export default App;
