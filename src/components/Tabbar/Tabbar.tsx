import { Icon } from '@iconify/vue'
import { Tabbar, TabbarItem } from 'vant'
import { computed, defineComponent, reactive, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'

import { CONST_ROUTES } from '@/constants'

import type { TabItem } from './TabbarTypes'

export default defineComponent({
  name: 'Tabbar',
  setup() {
    const state = reactive({
      activeTab: 0,
      tabs: [
        {
          label: '首页',
          name: CONST_ROUTES.INDEX.name,
          path: CONST_ROUTES.INDEX.path,
          icon: 'ant-design:home-outlined'
        },
        {
          label: '分类',
          name: CONST_ROUTES.CATEGORY.name,
          path: CONST_ROUTES.CATEGORY.path,
          icon: 'ant-design:appstore-outlined'
        },
        {
          label: '商铺',
          name: CONST_ROUTES.SHOP.name,
          path: CONST_ROUTES.SHOP.path,
          icon: 'ant-design:shop-outlined'
        },
        {
          label: '购物车',
          name: CONST_ROUTES.CART.name,
          path: CONST_ROUTES.CART.path,
          icon: 'ant-design:shopping-outlined'
        },
        {
          label: '我的',
          name: CONST_ROUTES.MY.name,
          path: CONST_ROUTES.MY.path,
          icon: 'ant-design:user-outlined'
        }
      ]
    })

    const route = useRoute()

    const show = computed(() =>
      [
        CONST_ROUTES.INDEX.name,
        CONST_ROUTES.CATEGORY.name,
        CONST_ROUTES.SHOP.name,
        CONST_ROUTES.CART.name,
        CONST_ROUTES.MY.name
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
