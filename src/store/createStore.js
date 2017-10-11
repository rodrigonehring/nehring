import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export default function configure(initialState) {

  const middlewares = []

  const store = createStore(rootReducer, initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  /*
  ** Hot Module replacement
  */
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}