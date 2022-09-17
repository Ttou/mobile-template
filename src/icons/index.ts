import type { IconifyIcons } from '@iconify/types'
import { addCollection } from '@iconify/vue'

const svgs = import.meta.glob('./*.svg', { as: 'raw' })

function getIcon(path: string) {
  return new Promise(resolve => {
    svgs[path]().then(res => {
      const pos = path.lastIndexOf('/')
      const filename = path.substring(pos + 1)
      const iconName = filename.split('.')[0]

      let body = res.replace(/<\/svg>/, '')
      body = body.replace(/^<svg[^>]+[\s\S]>/, '')

      const match = res.match(/viewBox="[\s\S][^"]+"/)
      let width = 1024
      let height = 1024

      // 获取 viewBox 中的宽高
      if (match.length > 0) {
        const a = match[0].substring(
          match[0].indexOf('"') + 1,
          match[0].lastIndexOf('"')
        )
        const b = a.split(' ').filter(v => v !== ' ')

        width = Number(b[2])
        height = Number(b[3])
      }

      resolve({
        iconName,
        body,
        width,
        height
      })
    })
  })
}

async function loadIcon() {
  const icons = {} as IconifyIcons

  for (const path in svgs) {
    const icon: any = await getIcon(path)

    icons[icon.iconName] = {
      body: icon.body,
      width: icon.width,
      height: icon.height
    }
  }

  addCollection({
    prefix: 'custom',
    icons
  })
}
loadIcon()
