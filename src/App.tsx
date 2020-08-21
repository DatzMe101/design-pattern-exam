import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import UserPage from './components/User/UserPage';
import PostPage from './components/Post/PostPage';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  return (
    <div className='app'>
      <h1 className='title'>Design Pattern Exam</h1>
      <div className='ui message'>
        <div className='header'>How to Test</div>
        <p>
          Click on each item and it will redirect you the different page
          depending on which item you clicked.
        </p>
      </div>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/users/:id' component={UserPage} />
        <Route exact path='/posts/:id' component={PostPage} />
      </Switch>
    </div>
  );
}

export default App;
