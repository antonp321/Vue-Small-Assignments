<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server-status v-for="server in servers" :server="server"></server-status>
        </ul>
    </div>
</template>

<script>
    import ServerStatus from './ServerStatus.vue'
    import {eventBus} from '../../main.js'

    export default {
        data: function(){
            return {
                servers: [
                    { id: 1, status: "status1"},
                    { id: 2, status: "status2"},
                    { id: 3, status: "status3"},
                    { id: 4, status: "status4"},
                    { id: 5, status: "status5"}
                ]
            }
        },
        components: {
            'server-status': ServerStatus
        }
    }
</script>

<style>

</style>
