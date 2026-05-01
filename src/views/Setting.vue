

<template>
  <div class="seting-box">
    <s-header :name="'账号管理'"></s-header>
    <div class="input-item">
      <van-field v-model="state.nickName" label="手机号" />
      <van-field v-model="state.password" type='password' label="修改密码" />
    </div>
    <van-button round class="save-btn" color="#1baeae" type="primary" @click="save" block>保存</van-button>
    <van-button round class="save-btn" color="#1baeae" type="primary" @click="handleLogout" block>退出登录</van-button>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import md5 from 'js-md5'
import sHeader from '@/components/SimpleHeader.vue'
import { getUserInfo, EditUserInfo, logout } from '@/service/user'
import { setLocal } from '@/common/js/utils'
import { showSuccessToast } from 'vant'
const state = reactive({
  nickName: '',
  password: ''
})

onMounted(async () => {
  const { data } = await getUserInfo()
  state.nickName = data.nickName
})

const save = async () => {
  const params = {
    nickName: state.nickName
  }
  if (state.password) {
    params.passwordMd5 = md5(state.password)
  } 
  await EditUserInfo(params)
  showSuccessToast('保存成功')
}

const handleLogout = async () => {
  const { resultCode } = await logout()
  if (resultCode == 200) {
    setLocal('token', '')
    window.location.href = '/home'
  }
}
</script>

<style lang="less" scoped>
  .seting-box {
    .save-btn {
      width: 80%;
      margin: 20px auto ;
    }
  }
</style>
