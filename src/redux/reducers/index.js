import changeTheNumber from './upDown'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	// all the reducers will be here in this object
	// changeTheNumber : changeTheNumber, ; same thing ,,we can write any
	changeTheNumber,
})

export default rootReducer
