import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'cgs-user',
  () => {
    /**
     * @typedef {Object} userModel -用户信息对象
     * @property {string} username -用户名
     * @property {Array} role -用户角色
     * @property {string} userAvatarUrl -用户头像
     */

    /**
     * @type {import('vue').Ref<userModel>}
     * @description 用户信息对象
     */
    const userInfo = ref({
      username: '',
      role: [],
      userAvatarUrl: ''
    })

    /**
     * @param {userModel} info -登陆后获取的用户信息
     * @returns {void} 无返回值
     */
    const setUserInfo = (info) => {
      userInfo.value = info
    }

    /**
     * @type {import('vue').Ref<string>}
     * @description 用户登录凭证
     */
    const token = ref('')

    /**
     * 设置用户登录凭证 token 的值。
     * @param {string} t - 要设置的 token 值。
     * @returns {void} 此函数不返回任何值。
     */
    const setToken = (t) => {
      token.value = t
    }

    /**
     * 移除用户登录凭证 token 的值。
     * @returns {void} 此函数不返回任何值。
     */
    const removeToken = () => {
      token.value = ''
    }

    return {
      token,
      setToken,
      removeToken,
      userInfo,
      setUserInfo
    }
  },
  {
    persist: true
  }
)
