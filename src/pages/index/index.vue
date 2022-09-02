<script setup>
</script>

<template>
  <view class="content">
    <view class="top-bar">
      <view class="top-bar-left">
        <image src="../../static/images/yingmei.jpeg" />
      </view>
      <view class="top-bar-center">
        <image class="logo" src="../../static/images/logo.png" />
      </view>
      <view class="top-bar-right">
        <view class="search">
          <image src="../../static/images/search.png" />
        </view>
        <view class="add">
          <image src="../../static/images/add.png" />
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 88rpx;
  box-sizing: border-box;
  background: $uni-bg-color;
  border-bottom: 1px solid $uni-border-color;

  .top-bar-left {
    float: left;
    padding-left: $uni-spacing-col-base;

    image {
      margin-top: 10rpx;
      width: 68rpx;
      height: 68rpx;
      border-radius: 16rpx;
    }
  }

  .top-bar-center {
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;

    .logo {
      padding-top: 19rpx;
      width: 88rpx;
      height: 42rpx;
    }
  }

  .top-bar-right {
    float: right;
    padding-right: 14rpx;

    .search {
      width: 88rpx;
      height: 88rpx;
      display: inline-block;
    }

    .add {
      width: 88rpx;
      height: 88rpx;
      display: inline-block;
    }

    image {
      padding: 18rpx 0 0 18rpx;
      width: 52rpx;
      height: 52rpx;
    }
  }
}
</style>
