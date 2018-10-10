<template>
  <div class="col-full">
    <h1>Welcome to the Forum</h1>
    <ForumList :forums="forums"/>
  </div>
</template>

<script>
import sourceData from '@/data' // @ symbol refers to the src folder
import ForumList from '@/components/ForumList'
console.log(sourceData)

export default {
  name: 'PageHome',
  components: {
    ForumList
  },
  data () {
    return {
      threads: Object.values(sourceData.threads),
      forums: Object.values(sourceData.forums)
    }
  }
}
</script>
