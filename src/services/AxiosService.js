
import axios from 'axios'

export const marsApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=Xi3dJeXfW3QEFisR16kID9hGpll4YRmopUczylM9',
  timeout: 3000
})
