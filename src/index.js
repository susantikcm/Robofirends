import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, /*combineReducers*/ } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

import './index.css';
import App from './Containers/App';
import rootReducer from './Reducers/rootReducer';

const logger = createLogger();

//const rootReducer = combineReducers;
const store = createStore(rootReducer, applyMiddleware(thunk, logger)); 

//Instead of passing the store to the app like below:
//ReactDOM.render(<App store={store} />, document.getElementById('root'));
//Use the 'Provider' component provided by 'react-redux' package,
//to take care of the passing down the store to all components down the component tree
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
