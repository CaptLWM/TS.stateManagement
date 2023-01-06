import React from 'react';
import {Provider} from 'react-redux';
// import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import AuthApp from './components/AuthApp';
import TodoApp from './components/TodoApp';
import rootReducer from './slices';
import PostsApp from './components/PostsApp';

const store = configureStore({reducer: rootReducer});

// provider로 감싸기
function App() {
  return (
    <Provider store={store}>
      <PostsApp />
    </Provider>
  );
}

export default App;
