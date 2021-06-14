import { useStorage } from '@vueuse/core'

const TokenKey = 'token'
const tokenStorage = useStorage(TokenKey, '')

export const getToken = () => tokenStorage.value

export const setToken = (token: string) => (tokenStorage.value = token)

export const removeToken = () => ((tokenStorage.value as any) = null)
