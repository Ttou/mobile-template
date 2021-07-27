import './index.less'

import { Tabbar, TabbarItem } from 'vant'
import { computed, defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'

import { SvgIcon } from '@/components'
import { ROUTE } from '@/router'

import type { TabItem } from './types'

export default defineComponent({
  name: 'Tabbar',
  setup() {
    const activeTab = ref(0)

    const route = useRoute()

    const show = computed(() =>
      [
        ROUTE.INDEX.path,
        ROUTE.CATEGORY.path,
        ROUTE.SHOP.path,
        ROUTE.CART.path,
        ROUTE.MY.path
      ].includes(route.path)
    )

    return {
      activeTab,
      show
    }
  },
  render() {
    const tabs = [
      {
        name: '首页',
        path: ROUTE.INDEX.path,
        icon: 'antOutline-home'
      },
      {
        name: '分类',
        path: ROUTE.CATEGORY.path,
        icon: 'antOutline-appstore'
      },
      {
        name: '商铺',
        path: ROUTE.SHOP.path,
        icon: 'antOutline-shop'
      },
      {
        name: '购物车',
        path: ROUTE.CART.path,
        icon: 'antOutline-shopping'
      },
      {
        name: '我的',
        path: ROUTE.MY.path,
        icon: 'antOutline-user'
      }
    ] as TabItem[]

    const renderItem = (tab: TabItem) => (
      <TabbarItem
        to={tab.path}
        v-slots={{
          icon: () => <SvgIcon class="icon" name={tab.icon} />,
          default: () => <span>{tab.name}</span>
        }}
      />
    )

    return (
      <Tabbar
        v-show={this.show}
        v-model={this.activeTab}
        class="tabbar"
        activeColor="#F759AB"
        inactiveColor="#BFBFBF"
      >
        {tabs.map(renderItem)}
      </Tabbar>
    )
  }
})
