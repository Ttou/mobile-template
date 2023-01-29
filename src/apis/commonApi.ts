import { ajax } from '@/utils'

export default {
  /**
   * 获取信息
   */
  getInfo(): Promise<IGetInfoRes> {
    return ajax.get('/demo/info')
  }
}
