<template>
  <div class="about">
    <h1>About {{ name }} </h1>
    <button v-on:click="showChild">Show me child</button>
    <router-view />
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  computed: {
    name() {
      return this.$route.params.name;
    }
  },
  methods: {
    showChild() {
      this.$router.push('/about/' + this.name + '/child')
    }
  }
}
</script>

<style>

</style>