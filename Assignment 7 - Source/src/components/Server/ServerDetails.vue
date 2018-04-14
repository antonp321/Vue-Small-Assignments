<template>
    <div class="col-xs-12 col-sm-6">
        <p>#{{server.id}} is waiting for an update.</p>
        <p>Current server status is {{server.status}}</p>

        <button @click="changeServerStatus">Change Status</button>
    </div>

</template>

<script>
    import {eventBus} from '../../main.js'

    export default {
        data: function(){
            return {
                server:{
                    id: 0,
                    status: "No Server Selected"
                }
            }
        },
        methods: {
            changeServerStatus(){
                this.server.status = "status" + this.server.id * 10;
            }
        },

        created(){
            eventBus.$on('sendDetails', (data) => {
                this.server = data;
            });
        }

    }
</script>

<style>

</style>
