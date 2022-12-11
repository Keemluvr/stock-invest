import { notificationConfig } from '@/hooks'
import axios, { AxiosError, AxiosResponse } from 'axios'

import { toast } from 'react-toastify'

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API
})

const defaultErrorHandler = (error: AxiosError<{ message: string }>): void => {
  if (error.response) {
    const { message } = error.response.data
    toast.error(message, notificationConfig)
  }
}

interface IHttp<T> {
  get: (url: string) => Promise<AxiosResponse<T> | void>
}

export const http = <T>(): IHttp<T> => {
  return {
    get: async (url: string): Promise<void | AxiosResponse<T>> =>
      await instance
        .get(url)
        .then((res) => res)
        .catch(defaultErrorHandler)
  }
}
