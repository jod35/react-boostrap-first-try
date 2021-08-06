import React, { useState } from 'react';
import { Button, Form ,Alert} from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [show,setShow]=useState(false)



    const history=useHistory()
    const changeUsername=(e)=>{setUsername(e.target.value)}
    const changeEmail=(e)=>{setEmail(e.target.value)}
    const changePassword=(e)=>{setPassword(e.target.value)}
    const changeConfirmPassword=(e)=>{setConfirmPassword(e.target.value)}



    const setToInitial=()=>{
        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }


    const signUpUser = (event) => {

        event.preventDefault()

        console.log(username)
        console.log(email)
        console.log(password)
        console.log(confirmPassword)
        console.log("Hello")

        setToInitial()

        // history.push('/login')



    }

    return (
        <div className="SignUp container">
            <h1>SignUp</h1>
            <form>
                
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text"
                        onChange={changeUsername}
                    placeholder="username" name="username" value={username} />
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" 
                     onChange={changeEmail}
                    placeholder="email" name="email" value={email} required/>
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" 
                    
                    onChange={changePassword}
                    placeholder="password" name="password" value={password} />
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" 
                    onChange={changeConfirmPassword}
                    placeholder="confirm password" name="confirm password" value={confirmPassword} />
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Button as="input" type="submit" variant="primary" onClick={signUpUser} />
                </Form.Group>
                <Form.Group>
                    <p>Already have an account, <Link to="/login">Login</Link></p>
                </Form.Group>
            </form>
        </div>
    )
}

export default SignUp