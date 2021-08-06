import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'
import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './Components/NavBar'
import {BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import CreateRecipe from './Components/createRecipe';
import UpdateRecipe from './Components/UpdateRecipe';



const App=()=>{
    return(
        <Router>
            <NavBar/>
            <Switch>
                
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <SignUp/>
                </Route>
                <Route path="/createRecipe">
                    <CreateRecipe/>
                </Route>
                <Route path="/updateRecipe">
                    <UpdateRecipe/>
                </Route>
                <Route path="/" >
                    <Home/>
                </Route>
            </Switch>
            
        </Router>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));