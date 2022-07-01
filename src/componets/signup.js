import '../CSS/OutPut.css'
import '../CSS/Add.css'
import {useHistory} from 'react-router-dom'
 

function SignUP(){


    let history = useHistory();

    const Register = (()=>{
        history.push('/home')
    })

    return (
        <div className="container">

            <h1>Register Account Here</h1>
            <input type="text" placeholder="Enter your email"/><br/>
            <input type="password" placeholder="Enter your password"/><br></br>

            <button id="btn" onClick={Register}>Sign Up</button>
        </div>
    )
}

export default SignUP;