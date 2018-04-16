<template>
    <div>
        First Name: <input type="text" :value="fName" @input="changeName(true, $event)">
        Last Name: <input type="text" :value="lName" @input="changeName(false, $event)">
    </div>
</template>

<script>
    export default {
        props:['value'],
        methods: {
          changeName(isFirst, e){
            let name = "";

            if(isFirst){
                name = e.target.value + " " + this.lName;
            }
            else{
                name = this.fName + ' ' + e.target.value;
            }

            this.value = name;
            this.$emit('input', this.value);
          }
        },
        computed: {
            fName(){
                return this.value.split(" ")[0];
            },
            lName(){
                return this.value.split(" ")[1];
            }
        }
    }
</script>