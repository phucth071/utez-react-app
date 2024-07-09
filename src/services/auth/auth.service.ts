import axiosInstance from '../../axios'
import Cookies from 'js-cookie'
import { AuthLoginResponse } from './auth.dto'

const BASE_AUTH_URL = '/auth'

const authService = {
    loginGoogle: async ({ accessToken }: { accessToken: string }) => {
        const routePath = `${BASE_AUTH_URL}/oauth2/google`
        console.log(accessToken)
        const { data } = await axiosInstance.post<AuthLoginResponse>(
          routePath,
          {idToken: accessToken},
          {
            withCredentials: true,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
          }
        )
    
        localStorage.setItem('access_token', data.data.access_token)
        console.log(data)
        return data
    },
    logout: () => {
    Cookies.remove('access_token')
    localStorage.clear()
    }
}

export default authService