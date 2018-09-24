import { FETCH_USERS } from '../actions';
import { REGISTER_USER } from '../actions';

export default function(state={},action) {
	switch(action.type){
		case FETCH_USERS:
			console.log(action.payload.data);break;
		case REGISTER_USER : console.log(action.payload.data);break;
		default : return state;
	}
}