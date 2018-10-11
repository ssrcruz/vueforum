<template>
  <div class="container">
    <div class="col-full">
      <div class="forum-list">
        <h2 class="list-title">
          <router-link :to="{name: 'Category', params: {id: category['.key']}}">
            {{category.name}}
          </router-link>
        </h2>
        <ForumList :forums="categoryForums" :category="category"/>
      </div>
    </div>
  </div>
</template>

<script>
  import ForumList from './ForumList'

  export default {
    props: {
      category: {
        required: true,
        type: Object
      }
    },
    data () {
      return {
        categoryForums: Object.values(this.category.forums)
      }
    },
    components: {
      ForumList
    }
  }
</script>
