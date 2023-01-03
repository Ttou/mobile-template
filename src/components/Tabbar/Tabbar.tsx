import { Icon } from '@iconify/vue'
import { Tabbar, TabbarItem } from 'vant'
import { computed, defineComponent, reactive, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'

import { ROUTE } from '@/router'

import type { TabItem } from './TabbarTypes'

export default defineComponent({
  name: 'Tabbar',
  setup() {
    const state = reactive({
      activeTab: 0,
      tabs: [
        {
          label: '首页',
          name: ROUTE.INDEX.name,
          path: ROUTE.INDEX.path,
          icon: 'ant-design:home-outlined'
        },
        {
          label: '分类',
          name: ROUTE.CATEGORY.name,
          path: ROUTE.CATEGORY.path,
          icon: 'ant-design:appstore-outlined'
        },
        {
          label: '商铺',
          name: ROUTE.SHOP.name,
          path: ROUTE.SHOP.path,
          icon: 'ant-design:shop-outlined'
        },
        {
          label: '购物车',
          name: ROUTE.CART.name,
          path: ROUTE.CART.path,
          icon: 'ant-design:shopping-outlined'
        },
        {
          label: '我的',
          name: ROUTE.MY.name,
          path: ROUTE.MY.path,
          icon: 'ant-design:user-outlined'
        }
      ]
    })

    const route = useRoute()

    const show = computed(() =>
      [
        ROUTE.INDEX.name,
        ROUTE.CATEGORY.name,
        ROUTE.SHOP.name,
        ROUTE.CART.name,
        ROUTE.MY.name
      ].includes(route.name as string)
    )

    watch(
      () => route.path,
      () => {
        const index = state.tabs.findIndex(v => v.name === route.name)

        if (index > -1) {
          state.activeTab = index
        }
      },
      {
        immediate: true
      }
    )

    return {
      ...toRefs(state),
      show
    }
  },
  render() {
    const renderItem = (tab: TabItem) => (
      <TabbarItem
        to={tab.path}
        v-slots={{
          icon: () => <Icon icon={tab.icon} />,
          default: () => <span>{tab.label}</span>
        }}
      />
    )

    return (
      <Tabbar
        v-show={this.show}
        v-model={this.activeTab}
        activeColor="#F759AB"
        inactiveColor="#BFBFBF"
      >
        {this.tabs.map(renderItem)}
      </Tabbar>
    )
  }
})
