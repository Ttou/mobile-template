import { ajax } from '@/utils'

import type { GetInfoRes } from './commonTypes'

export default {
  /** 获取信息 */
  getInfo(): Promise<GetInfoRes> {
    return ajax.get('/demo/info')
  }
}
