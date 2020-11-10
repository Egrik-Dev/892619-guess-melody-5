import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/root-reducers';
import thunk from 'redux-thunk';
import {createApi} from './services/api';
import {ActionCreator} from './actions/action';
import {composeWithDevTools} from "redux-devtools-extension";
import {AuthorizationStatus} from './const';
import {redirect} from './middlewares/redirect';

const api = createApi(
    () => store.dispatch(ActionCreator.changeAuthorizationStatus(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
