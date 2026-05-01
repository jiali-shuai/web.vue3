
 <template>
  <div class="about">
    <s-header :name="'关于我们'"></s-header>
    <div class="about-body">
      <!-- <img class="intro-img" src="https://s.yezgea02.com/1604046067055/WechatIMG30231.jpeg" alt=""> -->
      <van-divider :style="{ color: '#1baeae', borderColor: '#1baeae', fontSize: '20px', fontWeight: 500 }">简介</van-divider>
      <div>项目是一套类电商二手书商品系统，包括二手书商品的发布、购买、交易等功能。系统分为用户端和管理员端。</div>
      <div>**用户端：用户可以注册账号、登录系统、搜索二手书商品、购买二手书商品、查看订单、等功能。</div>
      <div>**管理员端：管理员可以登录系统，对二手书商品进行管理、对订单进行管理、对用户进行管理、对分类进行管理、对设置进行管理。</div>
      <van-divider :style="{ color: '#1baeae', borderColor: '#1baeae', fontSize: '20px', fontWeight: 500 }">开源地址</van-divider>
      <div>
        <br/>
        <div>用户端后端项目地址：<a target="_blank" href="https://github.com/jiali-shuai/web.fastapi.git">https://github.com/jiali-shuai/web.fastapi.git</a></div>
        <div>用户端前端项目地址：<a target="_blank" href="https://github.com/jiali-shuai/web.vue3.git">https://github.com/jiali-shuai/web.vue3.git</a></div>
        <br/>
        
        <div>管理员后端项目地址：<a target="_blank" href="https://github.com/jiali-shuai/houdtai.fastapi.git">https://github.com/jiali-shuai/houdtai.fastapi.git</a></div>
        <div>管理员前端项目地址：<a target="_blank" href="https://github.com/jiali-shuai/houtai.vue3.git">https://github.com/jiali-shuai/houtai.vue3.git</a></div>
        <br/>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import sHeader from '@/components/SimpleHeader.vue'
</script>

<style lang="less" scoped>
  .about {
    box-sizing: border-box;
    padding: 20px;
    .intro-img {
      width: 100%;
    }
    .about-body {
      font-size: 16px;
      a {
        color: #007fff;
      }
    }
  }
</style>
