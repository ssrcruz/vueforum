import Vue from 'vue'
import Vuex from 'vuex'
import sourceData from '@/data'
Vue.use(Vuex)

// $set(obj, propertyName, value)
// Using $set method updates the components with the new post (reactive)

export default new Vuex.Store({
  state: sourceData,

  actions: {
    createPost (context, post) {
      const postId = 'greatPost' + Math.random()
      post['.key'] = postId
      context.commit('setPost', {post, postId})
      context.commit('appendPostToThread', {postId, threadId: post.threadId})
      context.commit('appendPostToUser', {postId, userId: post.userId})
    }
  },

  mutations: {
    setPost (state, {post, postId}) {
      // sets post
      Vue.set(state.posts, postId, post)
    },

    appendPostToThread (state, {postId, threadId}) {
      // append post to thread
      const thread = state.threads[threadId]
      Vue.set(thread.posts, postId, postId)
    },

    appendPostToUser (state, {postId, userId}) {
      // append post to user
      const user = state.users[userId]
      Vue.set(user.posts, postId, postId)
    }
  }
})
