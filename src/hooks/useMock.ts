import MockAdapter from 'axios-mock-adapter'
import Mock from 'mockjs'

export function useMock(axios) {
  const mock = new MockAdapter(axios, { delayResponse: 500 })

  mock.onGet('/api/demo/info').reply(200, {
    title: 'Hello World'
  })
}
