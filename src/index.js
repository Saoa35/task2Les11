import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './Components/App/App';
import { apiResponsce } from './apiResponsce';
import { createStore } from 'redux';
import JSONPretty from 'react-json-pretty';
import { normalize, schema } from 'normalizr';


const user = new schema.Entity('users');
const comment = new schema.Entity('comments', {
  author: user
});

const lesson = new schema.Entity('lesson', {
  comments: [ comment ]
})

const normalizedData = normalize(apiResponsce, lesson);

// const reducer = (state = apiResponsce, action) => {
//   if(action.type === 'LIKE_COMMENT') {
//     let comments = state.comments.slice(0);
//     comments = comments.map(c => {
//       const newComment = Object.assign({}, c);
//       if(c.id === action.commentID) {
//         newComment.likes += 1;
//       }
//       return newComment;
//     })

//     return Object.assign({}, state, {comments: comments})
//   }
//   return state;
// };

const reducer = (state = normalizedData.entities, action) => {
  if(action.type === 'LIKE_COMMENT') {
    const { comments } = state;
    const { commentID: id } = action;

    return {
      ...state,
      comments: {
        ...comments,
        [id]: {
          ...comments[id],
          likes: comments[id].likes + 1
        }
      }
    }
  }
  return state;
};

const store = createStore(reducer);
window.store = store;


const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      {/* <App /> */}
      <JSONPretty json={store.getState()}/>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

renderApp();

store.subscribe(renderApp);