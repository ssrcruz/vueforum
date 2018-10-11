<template>
  <div>
    <ForumListItem
      v-for="forum in categoryForums"
      :forum="forum"
      :key="forum['.key']"/>
  </div>
</template>

<script>
  import sourceData from '@/data'
  import ForumListItem from './ForumListItem'

  export default {
    props: {
      forums: {
        required: true,
        type: Array
      }
    },
    components: {
      ForumListItem
    },
    computed: {
      categoryForums () { // returns all forums for a category
        const threadIds = Object.values(this.forums)
        return Object.values(sourceData.forums)
          .filter(forum => threadIds.includes(forum['.key']))
      }
    }
  }
</script>
