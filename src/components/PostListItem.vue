<template>
  <div class="post"> <!-- Iterate through all the posts within a thread -->
    <div class="user-info">
      <a href="#" class="user-name">{{user.name}}</a> <!-- Users who created the post -->
      <a href="#">
        <img class="avatar-large" :src="user.avatar" alt="">
      </a>
      <p class="desktop-only text-small">{{userPostsCount}} posts</p>
    </div>
    <div class="post-content">
      <div>
        {{post.text}}
      </div>
    </div>
    <AppDate class="post-date text-faded" :timestamp="post.publishedAt"/>
  </div>
</template>

<script>
  import sourceData from '@/data'
  import AppDate from './AppDate'

  export default {
    props: {
      post: {
        required: true,
        type: Object
      }
    },
    components: {
      AppDate
    },
    computed: {
      user () {
        return sourceData.users[this.post.userId] // returns a user who wrote the post
      },

      userPostsCount () {
        return Object.keys(this.user.posts).length // User posts
      }
    }
  }
</script>
