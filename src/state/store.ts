import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { createReduxHistoryContext } from 'redux-first-history'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import rootSaga from './rootSaga'
import createRootReducer from './rootReducer'

const sagaMiddleware = createSagaMiddleware()

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({ history: createBrowserHistory(), savePreviousLocations: 2 })

const store = createStore(createRootReducer({ routerReducer }), composeWithDevTools(applyMiddleware(routerMiddleware, sagaMiddleware)))

sagaMiddleware.run(rootSaga)

const history = createReduxHistory(store)

export { store, history }
