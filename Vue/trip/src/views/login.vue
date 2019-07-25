<template>
  <div class="login">
    <div class="login-bg">
      <h1 class="login-title">
      <img src="../../assets/img/logo.png" alt=""></h1>
       <md-field>
      <md-input-item
        ref="name"
        type="phone"
        title="手机号"
        placeholder="请输入手机号"
        is-title-latent
        clearable
      ></md-input-item>
      <md-input-item
        ref="id"
        title="密码"
        type="password"
        placeholder="请输入密码"
        is-title-latent
        clearable
        ></md-input-item>
    </md-field>
    <div class="login-btn">
      <span @click="loginOnClick">
        <md-button type="default">登陆</md-button>
      </span>
    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="stylus" scoped>
.login
  position fixed
  top 0
  left 0
  z-index 100
  width 100vw
  height 100vh
  overflow hidden
  background url("../../assets/img/login-bg.jpg")
  background-size 100% 100%
  padding 20px
  &-input
    margin-top 60px

  &-title
    margin-top 250px
    text-align center
    img
      width 402px
      height 101px
      margin auto


  &-btn
    width 100%
    margin 70px auto
    font-size 130px
    color #ffffff
    text-align center


.login-bg
  position absolute
  top 0
  left 0
  z-index 200
  width 100vw
  height 100vh
  background #ffffff31

</style>
<style lang="stylus">
.login
  .md-field
    background transparent

  .md-field-item-contentbefore
    background black

</style>

