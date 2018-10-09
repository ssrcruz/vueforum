<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="form-input"
        v-model="text"
        ></textarea> <!-- v-model directive creates a two way binding for newPostText -->
    </div>
    <div class="form-actions">
      <button class="btn-blue">Submit post</button>
    </div>
  </form>
</template>

<script>
  export default {
    props: {
      threadId: {
        required: true,
        type: String
      }
    },
    data () {
      return {
        text: ''
      }
    },
    methods: { // Methods are functions with access to the component instance and will always run whenever a re-render happens
      save () {
        const postId = 'greatPost' + Math.random() // Generate random id for post id
        const post = {
          text: this.text,
          publishedAt: Math.floor(Date.now() / 1000), // Convert Date.now to seconds and round the result using Math.floor
          threadId: this.threadId,
          userId: '7uVPJS9GHoftN58Z2MXCYDqmNAh2',
          '.key': postId
        }
        this.text = ''

        this.$emit('save', {post})
      }
    }
  }
</script>
