<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="loadBlue">Load Blue Template</button>
                <button class="btn btn-success" @click="loadGreen">Load Green Template</button>
                <button class="btn btn-danger" @click="loadRed">Load Red Template</button>
                <hr>
                <component :is="loadedComponent">
                    <h1 slot="blue">Blue</h1>
                    <h1 slot="red">Red</h1>
                    <h1 slot="green">Green</h1>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data: function(){
            return {
                loadedComponent: "appBlue"
            }
        },
        methods: {
            loadBlue(){
                this.loadedComponent = "appBlue";
            },
            loadGreen(){
                this.loadedComponent = "appGreen";
            },
            loadRed(){
                this.loadedComponent = "appRed";
            }
        }
    }
</script>

<style>
</style>
