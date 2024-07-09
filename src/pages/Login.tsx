import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import NavBar from '../components/NavBar';
import authService from '../services/auth/auth.service';
import { AuthLoginResponse } from '../services/auth/auth.dto';

export default function Login({ isLogin, setIsLogin }: { isLogin: boolean, setIsLogin: React.Dispatch<React.SetStateAction<boolean>> }) {
  const navigate = useNavigate();

  // https://stackoverflow.com/questions/49819183/react-what-is-the-best-way-to-handle-login-and-authentication
const onGoogleSignInE = async (res: {credential?: string}) => {
    const { credential } = res;
    if (credential) {
        const result: AuthLoginResponse = await authService.loginGoogle({ accessToken: credential });
        setIsLogin(result.success);
    }
};

  useEffect(() => {
    if (!isLogin) return;
    navigate('/dummypage');
  }, [isLogin]);

  return (
    <div>
      <h1>Goggle Login</h1>
      <NavBar />
      
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <GoogleLogin onSuccess={onGoogleSignInE}/>
      </GoogleOAuthProvider>
    </div>
  );
}