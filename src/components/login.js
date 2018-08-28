import React,{ Component } from 'react';

class Login extends Component {
    constructor(){
        super();
        state : ""
    }
   
    render() {
        return (
            <div>
                <form onSubmit="">
                Login username : <input type="text" />
                password : <input type="password" />
                <button type="submit">Login</button>
                </form>
               
            </div>
        );
    }
}
export default Login;