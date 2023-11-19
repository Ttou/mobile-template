import MockAdapter from 'axios-mock-adapter'
import Mock from 'mockjs'

export function useMock(instance) {
  const mock = new MockAdapter(instance, { delayResponse: 500 })

  mock.onGet('/api/demo/info').reply(200, {
    title: 'Hello World'
  })
}
