import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const REGISTER_USER ='register_user';

const ROOT_URL = 'http://127.0.0.1:4000';

export function fetch_users() {
	const request = axios.get(`${ROOT_URL}/users`);
	return {
		type : FETCH_USERS,
		payload :request
	};
}

export function registerUser(values,callback){
	const request = axios.post(`${ROOT_URL}/user/register`,values)
	.then(()=> callback());
	return {
		type : REGISTER_USER,
		payload : request
	};
}