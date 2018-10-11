<template>
  <div class="categoryWrapper">
    <CategoryListItem :category="category"/>
  </div>
</template>

<script>
  import sourceData from '@/data'
  import CategoryListItem from '@/components/CategoryListItem'
  export default {
    props: {
      id: {
        required: true,
        type: String
      }
    },
    components: {
      CategoryListItem
    },
    computed: {
      category () {
        return sourceData.categories[this.id] // finds & returns the right category from sourceData.categories
      }
    }
  }
</script>

<style scoped>
  .categoryWrapper {
    width: 100%;
  }
</style>
