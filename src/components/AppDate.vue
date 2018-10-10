<template>
  <span :title="timestamp | humanFriendlyDate">
    {{timestamp | diffForHumans}}
  </span>
</template>

<script>
  import moment from 'moment'
  export default {
    props: {
      timestamp: {
        required: true,
        type: Number
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
