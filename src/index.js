import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import Home from './components/pages/home/Home'
import { createStore } from 'redux'
import { allReducer } from './reducers'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, allReducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} persistor={persistor}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
