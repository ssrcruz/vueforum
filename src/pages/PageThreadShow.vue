<template>
  <div class="col-large push-top"> <!-- v-for directive used to iterate through all the threads -->
    <h1>{{thread.title}}</h1>
    <PostList :posts="posts"></PostList>
  </div>
</template>

<script>
  import sourceData from '@/data' // @ symbol refers to the src folder
  import PostList from '@/components/PostList'

  export default {
    name: 'PageThreadShow',
    props: {
      id: {
        required: true,
        type: String
      }
    },
    components: {
      PostList
    },
    data () {
      return {
        thread: sourceData.threads[this.id]
      }
    },
    computed: {
      posts () { // grabs all the posts belonging a thread
        const postIds = Object.values(this.thread.posts)
        return Object.values(sourceData.posts)
          .filter(post => postIds.includes(post['.key']))
      }
    }
  }
</script>
