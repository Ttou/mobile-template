import { string } from 'vue-types'

export const welcomeProps = () => ({
  /**
   * 欢迎消息
   */
  msg: string().isRequired
})
