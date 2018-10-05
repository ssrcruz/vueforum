<template>
  <div class="container">
    <div v-for="thread in threads" class="col-large push-top"> <!-- v-for directive used to iterate through all the threads -->
      <h1>{{thread.title}}</h1>

      <div class="post-list">
        <div v-for="postId in thread.posts" class="post"> <!-- Iterate through all the posts within a thread -->
          <div class="user-info">
            <a href="#" class="user-name">{{users[posts[postId].userId].name}}</a> <!-- Users who created the post -->
            <a href="#">
              <img class="avatar-large" :src="users[posts[postId].userId].avatar" alt="">
            </a>
            <p class="desktop-only text-small">107 posts</p>
          </div>
          <div class="post-content">
            <div>
              {{posts[postId].text}}
            </div>
          </div>
          <div class="post-date text-faded">
            {{posts[postId].publishedAt}}
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
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data' // @ symbol refers to the src folder

export default {
  name: 'HelloWorld',
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  }
}
</script>
