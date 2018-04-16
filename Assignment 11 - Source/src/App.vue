<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <div>{{text | reverseText | countTheLength}}</div>
                <div>{{reverseTextProp}}</div>
                <div>{{countTheLengthProp}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {filtersMixin} from './filtersMixin.js';

    export default {
        data(){
            return {
                text: "Hello World!"
            }
        },
        filters: {
            reverseText(value){
                return value.split("").reverse().join("");
            }
        },
        mixins: [filtersMixin]
    }
</script>

<style>
</style>
