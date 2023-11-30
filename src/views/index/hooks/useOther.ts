import { useRouter } from 'vue-router'

export function useOther() {
  const router = useRouter()

  function handleJumpOther() {
    router.push({
      path: '/other'
    })
  }

  return {
    handleJumpOther
  }
}
