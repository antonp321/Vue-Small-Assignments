<template>
  <li @click="sendServerDetails">
    <p>{{server.id}}#: Server Status: {{server.status}}</p>
  </li>
</template>

<script>
    import {eventBus} from '../../main.js'

    export default {
      props: ['server'],
      methods: {
        sendServerDetails(){
          eventBus.$emit('sendDetails', this.server)
        }
      }
    }
</script>
