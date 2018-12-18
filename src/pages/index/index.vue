<template>
  <div class="container">
    <i-tag class="i-tags" name="green" color="green">mpvue</i-tag>
    <i-tag class="i-tags" name="green" color="green">mpvue-entry</i-tag>
    <i-tag class="i-tags" name="green" color="green">mpvue-router-patch</i-tag>
    <i-tag class="i-tags" name="green" color="green">iview-weapp</i-tag>
    <div class="userinfo" @click="binddivTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
   <i-button type="ghost" @click="handleDefault">iview弹出层</i-button>
   <i-button @click="handleOpen1">iview对话框</i-button>
   <i-modal title="标题" :visible="visible1"  @ok="handleClose1" @cancel="handleClose1">
        <view>你好小程序</view>
        <view>你好小程序</view>
        <view>你好小程序</view>
    </i-modal>
    <i-message id="message" />
    <div class="A">
       <div class="a">你好mpvue(less)</div>
    </div>
    <button type="primary" @click="togo">路由跳转</button>
  </div>
</template>
<script>
import card from '@/components/card'
const { $Message } = require('../../../static/iview-weapp/base/index')

export default {
  config: {
    navigationBarTitleText: '首页',
    usingComponents: {
    }
  },
  mpType: 'page',
  data () {
    return {
      visible1: false,
      motto: 'Hello World',
      userInfo: {}
    }
  },
  components: {
    card
  },
  methods: {
    binddivTap () {
      const url = '/packageA/logs'
      this.$router.push(url)
    },
    handleOpen1 () {
      console.log('打开')
      this.visible1 = true
    },
    handleClose1 () {
      console.log('确定&关闭')
      this.visible1 = false
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    handleDefault () {
      $Message({
        content: '这是一条普通提醒'
      })
    },
    togo () {
      this.$router.push({ path: '/pages/counter/counter' })
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    // 请求接口定义
    // this.$http.request({
    //   method: 'post',
    //   url: '',
    //   body: {}
    // }).then(res => {
    //   console.log(res)
    // })
  }
}
</script>

<style lang="less" scoped>
.A{
  div{
    color: #f66;
    margin-bottom:100rpx;
  }
}
</style>
