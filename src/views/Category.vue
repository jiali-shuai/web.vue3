
<template>
  <div class="category-page">
    <header class="category-header wrap van-hairline--bottom">
      <i class="nbicon nbfanhui" @click="goHome"></i>
      <div class="header-search">
        <i class="nbicon nbSearch"></i>
        <router-link tag="span" class="search-title" to="./product-list?from=category">全场50元起步</router-link>
      </div>
      <i class="iconfont icon-More"></i>
    </header>
    <div class="content">
      <img 
        src="https://img.picui.cn/free/2025/05/31/683ad619877b5.jpg" 
        alt="卖书服务" 
        class="category-image"
      />
    </div>
    <nav-bar></nav-bar>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import navBar from '@/components/NavBar.vue'

const router = useRouter()

const goHome = () => {
  router.push({ path: 'home' })
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin';

.category-page {
  padding-bottom: 50px;
  
  .category-header {
    background: #fff;
    position: fixed;
    left: 0;
    top: 0;
    .fj();
    .wh(100%, 50px);
    line-height: 50px;
    padding: 0 15px;
    box-sizing: border-box;
    font-size: 15px;
    color: #656771;
    z-index: 10000;
    
    .header-search {
      display: flex;
      width: 80%;
      height: 20px;
      line-height: 20px;
      margin: 10px 0;
      padding: 5px 0;
      color: #232326;
      background: #F7F7F7;
      border-radius: 20px;
      .nbSearch {
        padding: 0 10px 0 20px;
        font-size: 17px;
      }
      .search-title {
        font-size: 12px;
        color: #666;
        line-height: 21px;
      }
    }
    .icon-More {
      font-size: 20px;
    }
  }
  
  .content {
    margin-top: 50px;
    padding: 10px;
  }
  
  .category-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
}
</style>