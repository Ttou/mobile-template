import axios from 'axios'
import { showConfirmDialog } from 'vant'
import { onBeforeMount, onMounted, reactive } from 'vue'

export function useUpdate() {
  const state = reactive({
    META_KEY: 'version-no',
    curVersion: null as Nullable<string>,
    timer: null as Nullable<number>,
    show: false
  })

  function showNotify() {
    state.show = true

    showConfirmDialog({
      title: '更新提示',
      message: '发现新版本，请刷新后使用哦',
      showCancelButton: false
    }).then(() => {
      state.show = false
      window.location.reload()
    })
  }

  function getCurVersion() {
    let version = ''
    const metaList = document.querySelectorAll('meta')

    if (metaList.length) {
      metaList.forEach(item => {
        if (item.name === state.META_KEY) {
          version = item.content
        }
      })
    }

    state.curVersion = version
  }

  async function getNewVersion() {
    const timestamp = new Date().getTime()
    const response = await axios.get(
      `${window.location.origin}/mobile-template`,
      {
        params: { timestamp }
      }
    )

    const el = document.createElement('html')
    el.innerHTML = response.data

    let newVersion = ''

    const metaList = el.querySelectorAll('meta')

    if (metaList.length) {
      metaList.forEach(item => {
        if (item.name === state.META_KEY) {
          newVersion = item.content
        }
      })
    }

    console.group('版本检测')
    console.log('现版本：', state.curVersion)
    console.log('新版本：', newVersion)
    console.groupEnd()

    if (newVersion && newVersion !== state.curVersion && !state.show) {
      showNotify()
    }
  }

  function getVersion() {
    getCurVersion()
    getNewVersion()
  }

  function setTimer() {
    state.timer = setInterval(getNewVersion, 30 * 60 * 1000)
  }

  function clearTimer() {
    if (state.timer) {
      clearInterval(state.timer)
      state.timer = null
    }
  }

  function onVisibilityChange() {
    if (!document.hidden) {
      setTimer()
      getVersion()
    } else {
      clearTimer()
    }
  }

  onMounted(() => {
    const url = window.location.origin

    // 非本地环境生效
    if (!/localhost/.test(url) && !/192\./.test(url)) {
      getVersion()
      setTimer()
      document.addEventListener('visibilitychange', onVisibilityChange)
    }
  })

  onBeforeMount(() => {
    clearTimer()
    document.removeEventListener('visibilitychange', onVisibilityChange)
  })
}
