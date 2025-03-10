import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore(
  'product',
  () => {
    /**
     * 商品列表
     * @type {import('vue').Ref<import('@/api/product.js').proModel[]>}
     */
    const productList = ref([])

    /**
     * 存储商品列表
     * @param {import('@/api/product.js').proModel[]} array - 传过来的商品数组
     * @returns {void} 无返回
     */
    const setProductList = (array) => {
      productList.value = array
    }

    return {
      productList,
      setProductList
    }
  },
  {
    persist: true
  }
)
