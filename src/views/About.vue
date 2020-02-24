<template>
  <div class="about">
    <h1>About {{ name }} </h1>
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
  }
}
</script>

<style>

</style>