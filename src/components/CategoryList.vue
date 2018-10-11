<template>
  <div class="container">
    <div class="col-full">
      <CategoryListItem
        v-for="category in categories"
        :category="category"
        :key="category['.key']"
      />
    </div>
  </div>
</template>

<script>
  import CategoryListItem from './CategoryListItem'
  export default {
    props: {
      categories: {
        required: true,
        type: Array
      }
    },
    components: {
      CategoryListItem
    }
  }
</script>
