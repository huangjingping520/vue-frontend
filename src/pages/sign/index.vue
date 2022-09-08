<script setup>
const type = ref('password')
const isUser = ref(true)
const isEmail = ref(false)
const isLook = ref(false)
const invalid = ref(false)
const isEmploy = ref(false)
const lookUrl = ref('https://merlinalex-pic.oss-cn-hangzhou.aliyuncs.com/img/eye-off.png')
const email = ref('')

const changeLook = function () {
  if (isLook.value) {
    type.value = 'password'
    isLook.value = !isLook.value
    lookUrl.value = 'https://merlinalex-pic.oss-cn-hangzhou.aliyuncs.com/img/eye-off.png'
  }
  else {
    type.value = 'text'
    isLook.value = !isLook.value
    lookUrl.value = 'https://merlinalex-pic.oss-cn-hangzhou.aliyuncs.com/img/eye.png'
  }
}

const isEmailFn = function (e) {
  const reg = /^[A-Za-z0-9\u4E00-\u9FA5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  email.value = e.detail.value
  if (email.value.length > 0) {
    if (reg.test(email.value)) {
      invalid.value = false
      isEmail.value = true
    }
    else {
      invalid.value = true
      isEmail.value = false
    }
  }
}
</script>

<template>
  <view class="content">
    <!-- top-bar start -->
    <view class="top-bar">
      <view class="top-bar-left">
        <image src="https://merlinalex-pic.oss-cn-hangzhou.aliyuncs.com/img/back.png" class="back" />
      </view>
    </view>
    <!-- top-bar end -->

    <view class="logo">
      <image src="https://merlinalex-pic.oss-cn-hangzhou.aliyuncs.com/img/logo.png" />
    </view>

    <view class="main">
      <view class="title">
        注册
      </view>
      <view class="inputs">
        <view class="inputs-div">
          <input type="text" placeholder="请输入用户名" class="user" placeholder-style="color: #aaa; font-weight: 400;">
          <view v-if="isEmploy" class="employ">
            用户名已被占用
          </view>
          <image v-if="isUser" src="https://merlinalex-pic.oss-cn-hangzhou.aliyuncs.com/img/correct.png" class="ok" />
        </view>
        <view class="inputs-div">
          <input type="email" placeholder="请输入邮箱" class="email" placeholder-style="color: #aaa; font-weight: 400;"
            @blur="isEmailFn">
          <view v-if="invalid" class="invalid">
            邮箱无效
          </view>
          <image v-if="isEmail" src="https://merlinalex-pic.oss-cn-hangzhou.aliyuncs.com/img/correct.png" class="ok" />
        </view>
        <view class="inputs-div">
          <input :type="type" placeholder="请输入密码" class="pwd" placeholder-style="color: #aaa; font-weight: 400;">
          <image class="look" :src="lookUrl" @tap="changeLook" />
        </view>
      </view>
    </view>
    <view class="submit">
      注册
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

  .top-bar-left {
    float: left;
    padding-left: 32rpx;
    width: 88rpx;
    height: 88rpx;

    .back {
      width: 26rpx;
      height: 46rpx;
      margin-top: 21rpx;
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

  .inputs-div {
    position: relative;

    .employ,
    .invalid {
      position: absolute;
      top: 30rpx;
      right: 0;
      font-size: $uni-font-size-base;
      font-weight: 500;
      color: $uni-color-error;
      line-height: 70rpx;
    }

    .ok {
      position: absolute;
      top: 50rpx;
      right: 0;
      width: 32rpx;
      height: 32rpx;
    }

    .look {
      position: absolute;
      top: 50rpx;
      right: 0;
      width: 32rpx;
      height: 32rpx;
    }
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
