import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/root-reducers';
import thunk from 'redux-thunk';
import {createApi} from './services/api';
import {fetchQuestions} from './store/action-api';
import {composeWithDevTools} from "redux-devtools-extension";

const api = createApi();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(fetchQuestions());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
