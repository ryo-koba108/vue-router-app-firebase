<template>
  <div>
    <Header />
    <div class="app-container">
      <Sidemenu />
      <Main />
    </div>
  </div>
</template>

<script>
import 'normalize.css';

import Header from './components/Header';
import Sidemenu from './components/Sidemenu';
import Main from './components/Main';

export default{
  components: {
    Header,
    Sidemenu,
    Main,
  }

}
</script>

<style>
.app-container{
  display: flex;
  padding-top: 60px;
}
</style>
