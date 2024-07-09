export type BaseResponse<T> = {
    success: boolean
    error: boolean
    message: string
    data: T
}