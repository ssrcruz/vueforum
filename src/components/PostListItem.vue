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
    <div class="post-date text-faded">
      {{post.publishedAt}}
    </div>
    <div class="reactions">
      <ul>
          <li>💡</li>
          <li>❤️</li>
          <li>👎</li>
          <li>👍</li>
          <li>👌</li>
      </ul>
      <button class="btn-xsmall"><span class="emoji">❤️</span>️ 3</button>
      <button class="btn-xsmall active-reaction"><span class="emoji">👌️</span>️ 1</button>
      <button class="btn-xsmall">+ <i class="fa fa-smile-o emoji"></i></button>
    </div>
  </div>
</template>

<script>
  import sourceData from '@/data'

  export default {
    props: {
      post: {
        required: true,
        type: Object
      }
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
