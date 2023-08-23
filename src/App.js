import './App.css';
import Register from './componets/Register';
import Login from './componets/Login'
import {useState} from "react"

function App() {

  const [user, setUser] = useState() 

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Register /> 
      <br></br>
      <br></br>
      <Login newUser={setUser} />
      {user 
        ?
        <h2>Hello welcome {user} you have logged in</h2>
        :
        <h2>Please log in</h2>
      }
    </div>
  );
}

export default App;
