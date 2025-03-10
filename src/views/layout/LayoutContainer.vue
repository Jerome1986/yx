<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>

<template>
  <router-view></router-view>
  <van-tabbar v-model="active" active-color="#ee0a24">
    <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/case" icon="search">案例</van-tabbar-item>
    <van-tabbar-item to="/about" icon="records-o">关于我们</van-tabbar-item>
    <van-tabbar-item to="/contract" icon="phone-o">联系我们</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped lang="scss"></style>
