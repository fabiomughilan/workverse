import './App.css';
import { usePrivy } from "@privy-io/react-auth";
import { useEffect } from 'react';

function App() {
  const { login, user } = usePrivy();

  useEffect(() => {
    if (user) {
      // Navigate to the external URL
      window.location.href = 'http://172.25.1.185:5173'; 
    }
  }, [user]);

  return (
    <>
      <div>
        <h1>WorkVerse</h1>
      </div>
      {!user && (
        <div className="card">
          <button onClick={login}>Login with Privy</button>
        </div>
      )}
    </>
  );
}

export default App;