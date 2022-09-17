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

      resolve({
        iconName,
        body
      })
    })
  })
}

async function init() {
  const icons = {}

  for (const path in svgs) {
    const icon = await getIcon(path)
    console.log(icon)
    icons[icon.iconName] = {
      body: icon.body,
      width: 1024,
      height: 1024
    }
  }

  addCollection({
    prefix: 'custom',
    icons
  })
}
init()
