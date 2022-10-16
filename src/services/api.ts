import Axios from 'axios'
import { path } from 'ramda'

interface ApiService {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  url: string,
  headers?: any,
  data?: any
}

const axios = Axios.create({
  baseURL: process.env.REST_ENDPOINT,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export const apiService = ({ method, url, headers, data }: ApiService) => new Promise(async (resolve, reject) => {

  try {
    const response = await axios({ method, url, headers, data })
    resolve(path(['data'], response))
  } catch (error: any) {
    reject(path(['response', 'data', 'message'], error))
  }
})
