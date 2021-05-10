import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from 'redux';
import { Reducer } from './redux/Reducer';
import { Provider } from "react-redux";
import { rootSaga } from "./redux/sagas";

const saga = createSagaMiddleware();

const store = createStore(Reducer, applyMiddleware(saga));
saga.run(rootSaga);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

export default store
