<template>
  <header class="header">
    <h1 class="logo">Vue App</h1>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
  background-color: #3daf7c;
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 1;
}
/* z-index 重なったときの優先順位で数字が大きいほど上にくる */

.logo{
  margin: 0;
  line-height: 60px;  /*これがあることで文字が真ん中にくる */
  padding-left: 10px;
  color: white;
}

</style>