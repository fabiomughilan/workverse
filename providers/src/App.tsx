import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {usePrivy} from "@privy-io/react-auth";
function App() {
  const {login,user} = usePrivy();

  return (
    <>
      <div>
      </div>
      <h1>WorkVerse</h1>
      <div className="card">
        <button onClick={login}>Login with Privy</button>
      </div>
      
    </>
  )
}

export default App
