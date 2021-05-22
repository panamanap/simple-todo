import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Todo';
import store from './redux/store';

ReactDOM.render(
    <Todo store={store} dispath= {store.dispath}/>,
  document.getElementById('root')
);