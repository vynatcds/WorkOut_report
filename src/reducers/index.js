import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UsersReducer from './reducer_users';

const rootReducer = combineReducers({
   form : formReducer,
   users : UsersReducer
});
export default rootReducer;