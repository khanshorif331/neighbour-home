import rootReducer from './reducers/index'
import { createStore } from 'redux'

// the second paremeter is only for redux devtools
const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
