import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [profile,setProfile] = useState();
  const google= ()=>{
    axios.get("http://localhost:3000/auth/google").then(res=>{
     if (res.data){
       window.location.href=res.data.url;
     }
    })
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="container">
      <div className="card">
      <h1>Login with Google</h1>
      <button onClick={google} className="google-button">
        <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" />
        <span>Sign in with Google</span>
      </button>
    </div>
    </div>
        
    </>
  )
}

export default App
