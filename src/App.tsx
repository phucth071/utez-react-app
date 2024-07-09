import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom' // Import BrowserRouter as Router
import Login from './pages/Login'
import axiosInstance from './axios'
import MyPage from './pages/DummyPage'

function App() {

  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();
  const [info, setInfo] = useState<{
    email: string;
    firstName: string;
    lastName: string;
  }>({
    email: '',
    firstName: '',
    lastName: '',
  });

  useEffect(() => {
    if (!isLogin) {
      navigate('/');
      return; // Exit the effect if not logged in
    }
  
    const initUserinfo = async () => {
      try {
        const newinfo = await axiosInstance.get('/auth/user/info');
        setInfo(newinfo.data);
        console.log(info);
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    };
    initUserinfo();
    return () => {};
  }, [isLogin]);

  return (
    
    <> {/* Wrap the component with Router */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
          />
          <Route
            path="/dummypage"
            element={isLogin ? <MyPage isLogin={isLogin} /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
      {/* <>
        
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>  */}
    </>
  );
}

export default App
