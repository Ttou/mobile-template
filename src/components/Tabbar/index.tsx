import { computed, defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Tabbar, TabbarItem } from 'vant'
import { SvgIcon } from '@/components'
import { Route } from '@/router'
import './index.less'

import type { TabItem } from './types'

export default defineComponent({
  setup() {
    const activeTab = ref(0)

    const route = useRoute()

    const show = computed(() =>
      [Route.index, Route.category, Route.shop, Route.cart, Route.my].includes(
        route.path as Route
      )
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
        path: Route.index,
        icon: 'antOutline-home'
      },
      {
        name: '分类',
        path: Route.category,
        icon: 'antOutline-appstore'
      },
      {
        name: '商铺',
        path: Route.shop,
        icon: 'antOutline-shop'
      },
      {
        name: '购物车',
        path: Route.cart,
        icon: 'antOutline-shopping'
      },
      {
        name: '我的',
        path: Route.my,
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
