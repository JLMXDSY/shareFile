import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(<Tick />,document.getElementById('tick'))

{
  let a = 123;
  
}
