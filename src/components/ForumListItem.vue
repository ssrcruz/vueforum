<template>
  <div class="forum-listing">
    <div class="forum-details">
      <router-link class="text-xlarge" :to="{name: 'Forum', params: {id: forum['.key']}}">
        <a class="text-xlarge">{{forum.name}}</a>
      </router-link>
      <p>{{forum.description}}</p>
    </div>

    <div class="threads-count">
      <p class="count">{{threadsCount}}</p>
      {{threadsCount === 1 ? 'thread' : 'threads'}}
    </div>

    <div class="last-thread">
        <!-- <img class="avatar" src="https://www.sideshowtoy.com/photo_9030371_thumb.jpg" alt="">
        <div class="last-thread-details">
          <a href="thread.html">Where is the sign in button?</a>
          <p class="text-xsmall">By <a href="profile.html">Joseph Kerr</a>, three hours ago</p>
        </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      forum: {
        required: true,
        type: Object
      }
    },

    computed: {
      threadsCount () {
        return this.forum.threads ? Object.values(this.forum.threads).length : 0
      }
    }
  }
</script>
