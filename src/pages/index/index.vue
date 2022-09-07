<script setup>
import { friends } from '../../utils/data'
import { dateTime } from '../../utils/dateTime'

function changeTime(date) {
  return dateTime(date)
}

const friend = ref(friends())
</script>

<template>
  <view class="content">
    <!-- top-bar start -->
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
    <!-- top-bar end -->

    <view class="main">
      <view class="friends">
        <view class="friend-list">
          <view class="friend-list-l">
            <text class="tip">
              1
            </text>
            <image src="../../static/images/addFriend.png" />
          </view>
          <view class="friend-list-r">
            <view class="top">
              <view class="name">
                好友申请
              </view>
              <view class="time">
                13:14
              </view>
            </view>
            <view class="news">
              您有新的好友申请了！！
            </view>
          </view>
        </view>
      </view>

      <view class="friends">
        <view v-for="(i, idx) in friend" :key="idx" class="friend-list">
          <view class="friend-list-l">
            <text class="tip">
              {{ i.tip }}
            </text>
            <image :src="i.imgurl" />
          </view>
          <view class="friend-list-r">
            <view class="top">
              <view class="name">
                {{ i.name }}
              </view>
              <view class="time">
                {{ changeTime(i.time) }}
              </view>
            </view>
            <view class="news">
              {{ i.news }}
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  border-bottom: 1px solid $uni-border-color;
  z-index: 1000;

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

.main {
  padding-top: 104rpx;
}

.friend-list {
  height: 96rpx;
  padding: 16rpx $uni-spacing-col-base;

  &:active {
    background-color: $uni-bg-color-grey;
  }

  .friend-list-l {
    position: relative;
    float: left;

    image {
      width: 96rpx;
      height: 96rpx;
      border-radius: $uni-border-radius-base;
      background-color: #E1FFEE;
    }

    .tip {
      position: absolute;
      z-index: 10;
      top: -6rpx;
      left: 68rpx;
      min-width: 36rpx;
      height: 36rpx;
      background: $uni-color-error;
      border-radius: $uni-border-radius-circle;
      font-size: $uni-font-size-sm;
      color: $uni-text-color-inverse;
      line-height: 36rpx;
      text-align: center;
    }
  }

  .friend-list-r {
    padding-left: 128rpx;

    .top {
      height: 50rpx;

      .name {
        float: left;
        font-size: 36rpx;
        color: $uni-text-color;
        line-height: 50rpx;
        font-weight: 400;
      }

      .time {
        /* display: none; */
        float: right;
        font-size: $uni-font-size-sm;
        color: $uni-text-color-disable;
        line-height: 50rpx;
      }
    }

    .news {
      font-size: $uni-font-size-base;
      color: $uni-text-color-grey;
      line-height: 40rpx;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
  }
}
</style>
