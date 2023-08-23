import './App.css';
import Register from './componets/Register';
import Login from './componets/Login'
import { getCookie } from './common';
import { authCheck } from './utils';
import {useState, useEffect} from "react"

function App() {

  const [user, setUser] = useState() 

  useEffect (() => {
    console.log("Use effect ran")
    let cookie = getCookie("jwt_token")
    console.log(cookie)

    if (cookie !== false) {
      loginWithToken(cookie)
    }
  },[])

  const loginWithToken = async (cookie) => {
    // make the request to my authCheck route
    let user = await authCheck(cookie)
    setUser(user)
  }


  return (
    <div className="App">
      <h1>Hello World</h1>
      <Register /> 
      <br></br>
      <br></br>
      <Login newUser={setUser} />
      {
        user 
          ?
          <h2>Hello welcome {user} you have logged in</h2>
          :
          <h2>Please log in</h2>
      }
    </div>
  );
}

export default App;
