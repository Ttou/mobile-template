import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/demo/info',
    method: 'get',
    timeout: 1000,
    response: () => ({
      title: 'Hello World'
    })
  }
] as MockMethod[]
