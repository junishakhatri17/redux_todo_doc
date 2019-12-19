import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import store from './redux/store/store'
import {Provider} from 'react-redux'




ReactDOM.render(<Provider store={store}><TodoApp ></TodoApp></Provider>, document.getElementById('root'))
