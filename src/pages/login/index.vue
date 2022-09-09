<script setup>
const user = ref('')
const pwd = ref('')

const testFn = function () {
  uni.request({
    url: 'http://127.0.0.1:3001/login/match',
    data: {
      data: 'merlin',
      pwd: '123456'
    },
    method: 'POST',
    success: data => {
      console.log(data)
    }
  })
}

const toSignUp = function () {
  uni.navigateTo({
    url: '../sign/index'
  })
}

const getUser = function (e) {
  user.value = e.detail.value
}

const getPwd = function (e) {
  pwd.value = e.detail.value
}

const login = function () {
  if (user.value && pwd.value)
    console.log('update')
}
</script>

<template>
  <view class="content">
    <!-- top-bar start -->
    <view class="top-bar">
      <view class="top-bar-right" @tap="toSignUp">
        <view class="text">
          注册
        </view>
      </view>
    </view>
    <!-- top-bar end -->

    <view class="logo">
      <image src="https://merlinalex-pic.oss-cn-hangzhou.aliyuncs.com/img/logo.png" />
    </view>

    <view class="main">
      <view class="title">
        登录
      </view>
      <view class="slogan">
        您好，欢迎来到 moan!
      </view>
      <view class="inputs">
        <input type="text" placeholder="用户名/邮箱" class="user" placeholder-style="color: #aaa; font-weight: 400;"
          @blur="getUser">
        <input type="password" placeholder="密码" class="pwd" placeholder-style="color: #aaa; font-weight: 400;"
          @blur="getPwd">
      </view>
      <view class="tips">
        输入用户或密码错误！！
      </view>
    </view>
    <view class="submit" @tap="testFn">
      登录
    </view>
  </view>
</template>

<style lang="scss" scoped>
.content {
  padding-top: var(--status-bar-height);
}

.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 88rpx;
  box-sizing: border-box;
  background: $uni-bg-color;
  z-index: 1000;

  .top-bar-right {
    float: right;
    padding-right: 32rpx;

    .text {
      font-weight: 500;
      font-size: $uni-font-size-lg;
      color: $uni-text-color;
      line-height: 88rpx;
    }
  }
}

.logo {
  text-align: center;

  image {
    padding-top: 256rpx;
    width: 384rpx;
    height: 184rpx;
    margin: 0 auto;
  }
}

.main {
  padding: 72rpx $uni-spacing-row-lg 100rpx;

  .title {
    font-size: 56rpx;
    font-weight: 500;
    color: $uni-text-color;
    line-height: 80rpx;
  }

  .slogan {
    font-size: 40rpx;
    line-height: 46rpx;
    color: $uni-text-color-grey;
  }

  .inputs {
    padding-top: 30rpx;

    input {
      height: 70rpx;
      padding-top: 30rpx;
      font-size: $uni-font-size-lg;
      font-weight: 500;
      color: $uni-text-color;
      line-height: 70rpx;
      border-bottom: 1rpx solid $uni-border-color;
    }
  }

  .tips {
    float: left;
    font-size: $uni-font-size-lg;
    color: $uni-color-warning;
    line-height: 56rpx;
  }
}

.submit {
  margin: 0 auto;
  width: 520rpx;
  height: 96rpx;
  background-color: #FFEEAF;
  border-radius: 48rpx;
  font-size: 48rpx;
  font-weight: 400;
  line-height: 96rpx;
  text-align: center;
  color: $uni-text-color;
}
</style>
