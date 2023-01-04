import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AuthApp from './components/AuthApp';
import TodoApp from './components/TodoApp';
import rootReducer from './slices';

const store = createStore(rootReducer);

// provider로 감싸기
function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
