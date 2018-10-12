<template>
  <div>
    <TheNavbar />
    <div class="container">
      <router-view/> <!-- Make all routes available globally -->
    </div>
  </div>
</template>

<script>
  import TheNavbar from '@/components/TheNavbar'

  export default {
    components: {
      TheNavbar
    }
  }
</script>

<style>
@import 'assets/css/style.css';
</style>
