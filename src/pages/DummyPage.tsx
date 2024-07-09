import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axiosInstance from '../axios';

export default function MyPage({ isLogin } : { isLogin: boolean }) {
  const navigate = useNavigate();
  const [info, setInfo] = useState<{
    email: string;
    fullName: string;
  }>({
    email: '',
    fullName: '',
  });

  useEffect(() => {
    if (!isLogin) {
      navigate('/');
      return; // Exit the effect if not logged in
    }
  
    const initUserinfo = async () => {
      try {
        const response = await axiosInstance.get('/auth/user/info');
        const data = response.data;
        const newinfo = {
          email: data.principal.email,
          fullName: data.principal.fullName,
        };
        setInfo(newinfo);
        console.log(newinfo);
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    };
    initUserinfo();
    return () => {};
  }, [isLogin]);

  return (
    <div>
      <h1>mypage</h1>
      <p>Welcome To MyPage</p>
      <p>email: {info.email}</p>
      <p>name: {`${info.fullName}`}</p>
    </div>
  );
}