import '../CSS/OutPut.css'
import React from 'react';
import {Router, useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
 
function Login (){

    const btn = {
        width:'150px',
        height:'30px',
        marginTop:'3%',
    }

    let history = useHistory();

    const login = (()=>{
        history.push('/home')
    })
    
    return (
        <div className="container">

            <h1>Log In</h1>
            <input type="text" placeholder="Enter your email"/><br/> <br/>
            <input type="password" placeholder="Enter your password"/><br/><br/>

            <button id="btn" style={btn} onClick={login}>Log In</button><br/><br/>

            <span>Dont have an account?</span><br/>

            <span >
        
            <Link to="/signup">
                Create Account
            </Link>
            </span>
        </div>
    )
}

export default Login;