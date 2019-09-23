<template>
  <div class="home">
    <img alt="DevCon logo" src="../assets/unicorn.png" width="300">
    <HelloWorld msg="Welome to the DevCon tickets sale!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>

<style scoped lang="scss">
</style>
