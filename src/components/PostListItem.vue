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
    <div class="post-date text-faded" :title="post.publishedAt | humanFriendlyDate">
      {{post.publishedAt | diffForHumans}}
    </div>
  </div>
</template>

<script>
  import sourceData from '@/data'
  import moment from 'moment'

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
    },
    filters: { // filter methods are like normal methods instead they are used to apply text formatting
      humanFriendlyDate (date) { // can be used in the view like -> {{ date | humanFriendlyDate }} or use v-bind, date would be the var passed into the function
        return moment.unix(date).format('MMMM do YYYY, h:mm:ss a') // Ex: October 2nd, 2018 4:29:59 pm
      },

      diffForHumans (date) {
        return moment.unix(date).fromNow()
      }
    }
  }
</script>
