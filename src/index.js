import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Todo';
import store from './redux/store';
import {Provider} from "react-redux"

ReactDOM.render(
   <Provider store={store}>  
      <Todo/>
   </Provider>,
   document.getElementById('root')
);