import { Icon } from '@iconify/vue'
import { Tabbar, TabbarItem } from 'vant'
import { computed, defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import { ROUTE } from '@/router'

import type { TabItem } from './TabbarTypes'

export default defineComponent({
  name: 'Tabbar',
  setup() {
    const activeTab = ref(0)
    const tabs = ref([
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
    ])

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
        const index = tabs.value.findIndex(v => v.name === route.name)

        if (index > -1) {
          activeTab.value = index
        }
      },
      {
        immediate: true
      }
    )

    return {
      activeTab,
      tabs,
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
