<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <div v-myon:click="itsClicked">
                    <p>Click HERE !</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        directives: {
            'myon': {
                bind(el, binding, vnode){

                    let typeOfEvent = binding.arg;
                    let functionToExecute = binding.value;

                    el.addEventListener(typeOfEvent, functionToExecute);
                }
            }
        },
        methods: {
            itsClicked(){
                alert("Done !");
            }
        }

    }
</script>

<style>
</style>
