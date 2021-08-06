import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const setToInitial=()=>{
        setUsername('')
        setPassword('')
    }


    const loginUser = (event) => {

        event.preventDefault()
        console.log("Logged In")

        setToInitial()
    }

    return (
        <div className="Login container">
            <form>
                <h1>Login</h1>


                <Form.Group>
                    <Form.Label>UserName</Form.Label>
                    <Form.Control

                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={(event) => { setUsername(event.target.value) }}

                    />
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
                    />
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Button variant="primary" as="input" type="submit" value="Login" onClick={loginUser} />
                </Form.Group>
                <br></br>
                <Form.Group>
                    <p>Do not have an account, <Link to="/signup">Create One</Link></p>
                </Form.Group>
            </form>
        </div>
    )
}

export default Login