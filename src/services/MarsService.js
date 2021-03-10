import { AppState } from '../AppState'
import { marsApi } from './AxiosService'

class MarsService {
  async searchMars () {
    const res = await marsApi.get('')
    console.log(res)
    AppState.mars = res.data
  }

  setActiveMarsImg (mars) {
    AppState.activeMarsImg = mars
  }
}

export const marsService = new MarsService()
