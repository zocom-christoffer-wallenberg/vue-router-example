<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <label>{{ msg }}</label>
    <input type=text v-model="name" />
    <button v-on:click="send">Skicka</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data: () => {
    return {
      name: ''
    }
  },
  methods: {
    send() {
      this.$router.push('/about/' + this.name);
    }
  },
  components: {
    HelloWorld
  }
}
</script>
