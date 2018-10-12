<template>
  <div class="col-large push-top">
    <h1>{{thread.title}}</h1>
    <p>
      By <a href="#" class="link-unstyled">Robin</a>, <AppDate :timestamp="thread.publishedAt"/>.
      <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">3 replies by 3 contributors</span>
    </p>
    <PostList :posts="posts"></PostList>
    <PostEditor :threadId="id"/>
  </div>
</template>

<script>
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
        thread: this.$store.state.threads[this.id]
      }
    },

    computed: { // Computed functions are used for complex logic and will only re-evaluate when some of its dependencies have changed
      posts () { // grabs all the posts belonging to a thread
        const postIds = Object.values(this.thread.posts)
        return Object.values(this.$store.state.posts)
          .filter(post => postIds.includes(post['.key']))
      }
    }
  }
</script>
