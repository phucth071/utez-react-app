import { BaseResponse } from '../common/base.dto'

export type AuthLoginResponse = BaseResponse<AuthLoginData>

export type AuthLoginData = {
    access_token: string
    refresh_token: string
    id: number
    email: string
    avatar: string,
    role: string,
    provider: string
  }