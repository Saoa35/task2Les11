import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import { apiResponsce } from './apiResponsce';
import { createStore } from 'redux';


const reducer = (state = apiResponsce, action) => {
  if(action.type === 'LIKE_COMMENT') {
    let comments = state.comments.slice(0);
    comments = comments.map(c => {
      const newComment = Object.assign({}, c);
      if(c.id === action.commentID) {
        newComment.likes += 1;
      }
      return newComment;
    })

    return Object.assign({}, state, {comments: comments})
  }
  return state;
};

const store = createStore(reducer);
window.store = store;


const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      {/* <App /> */}
    </React.StrictMode>
    document.getElementById('root')
  )
}

renderApp();

store.subscribe(renderApp)