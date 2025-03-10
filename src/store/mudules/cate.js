import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCateStore = defineStore(
  'category',
  () => {
    /**
     * 一级分类
     * @type {import('vue').Ref<import('@/api/cate.js').cateModel[]>}
     */
    const firstCate = ref([])

    /**
     * 存储一级分类
     * @param {import('@/api/cate.js').cateModel[]} array - 传过来的分类数组
     * @returns {void} 无返回
     */
    const setFirstCate = (array) => {
      firstCate.value = array
    }

    /**
     * 二级分类
     * @type {import('vue').Ref<import('@/api/cate.js').cateModel[]>}
     */
    const subCate = ref([])

    /**
     * 存储二级级分类
     * @param {import('@/api/cate.js').cateModel[]} array - 传过来的分类数组
     * @returns {void} 无返回
     */
    const setSubCate = (array) => {
      subCate.value = array
    }

    return {
      firstCate,
      setFirstCate,
      subCate,
      setSubCate
    }
  },
  {
    persist: true
  }
)
