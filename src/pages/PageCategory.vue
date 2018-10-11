<template>
  <div class="col-full">
    <h2>{{category.name}}</h2>
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
