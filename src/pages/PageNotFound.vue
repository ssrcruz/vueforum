<template>
  <div class="col-full"
       :class="$style.center"
  >
    <h1 :class="$style.headingLarge">Not Found</h1>
    <p :class="$style.textLarge">Ooops, we couldn't find what you are looking for. Why don't you go
      <router-link :to="{name: 'Home'}">
        home instead?
      </router-link>
    </p>

  </div>
</template>

<script>
  export default {}
</script>

<style module> /* use module so Vue can create a special $style property */
  /* In Vue it is recommended that we use camel case class names to avoid the $style['heading-large'] syntax */
  .headingLarge {
    font-size: 100px;
  }
  .textLarge {
    font-size: 50px;
    font-weight: 100;
  }
  .center {
    text-align: center;
  }
</style>
