<template>
  <div class="col-large push-top">
    <h1>{{thread.title}}</h1>
    <PostList :posts="posts"></PostList>
    <PostEditor @save="addPost" :threadId="id"/>
  </div>
</template>

<script>
  import sourceData from '@/data' // @ symbol refers to the src folder
  import PostList from '@/components/PostList'
  import PostEditor from '@/components/PostEditor'
  export default {
    name: 'PageThreadShow',
    props: {
      id: {
        required: true,
        type: String
      }
    },
    components: {
      PostList,
      PostEditor
    },
    data () {
      return {
        thread: sourceData.threads[this.id]
      }
    },
    computed: { // Computed functions are used for complex logic and will only re-evaluate when some of its dependencies have changed
      posts () { // grabs all the posts belonging a thread
        const postIds = Object.values(this.thread.posts)
        return Object.values(sourceData.posts)
          .filter(post => postIds.includes(post['.key']))
      }
    },
    methods: {
      addPost (eventData) {
        const post = eventData.post
        const postId = eventData.post['.key']
        // sourceData.posts[postId] = post // append new post into posts object
        // this.thread.posts[postId] = post // append new post into the list of posts for the specific thread

        // $set(obj, propertyName, value)
        // Using $set method updates the components with the new post (reactive)

        this.$set(sourceData.posts, postId, post)
        this.$set(this.thread.posts, postId, postId)
        this.$set(sourceData.users[post.userId].posts, postId, postId)
      }
    }
  }
</script>
