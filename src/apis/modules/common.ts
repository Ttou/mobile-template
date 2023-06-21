import { ajax } from '@/utils'

import type { IGetInfoRes } from '../schema'

export type { IGetInfoRes }

export const commonApi = {
  /**
   * 获取信息
   */
  getInfo(): Promise<IGetInfoRes> {
    return ajax.get('/demo/info')
  }
}
