<template>
  <div class="col-large push-top">
    <h1>{{thread.title}}</h1>
    <p>
      By <a href="#" class="link-unstyled">Robin</a>, <AppDate :timestamp="thread.publishedAt"/>.
      <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">3 replies by 3 contributors</span>
    </p>
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
      addPost ({post}) { // destructuring assignment: Unpacks the post property from the event data object into it's own variable
        const postId = post['.key']
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
