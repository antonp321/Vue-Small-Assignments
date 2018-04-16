<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <form v-if="!isSubmitted">
                        <full-name v-model="formData.fName"></full-name><br/>
                        Mail: <input type="text" v-model="formData.mail"><br/>
                        Password: <input type="password" v-model="formData.pass"><br/>
                        Store Data: Yes <input type="radio" value="Yes" v-model="formData.storeIt"> No <input type="radio" value="No" v-model="formData.storeIt"><br/><br/>
                        <button @click.prevent="submitTheForm">Submit</button>
                    </form>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{formData.fName}}</p>
                        <p>Mail: {{formData.mail}}</p>
                        <p>Password: {{formData.pass}}</p>
                        <p>Store in Database?: {{formData.storeIt}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue';

    export default {
        components: {
          'full-name': FullName
        },
        data(){
            return {
                formData: {
                    fName: "",
                    mail: "",
                    "pass": "",
                    storeIt: "No"
                },
                isSubmitted: false
            }
        },
        methods: {
            submitTheForm(){
                this.isSubmitted = true;
            }
        }
    }
</script>

<style>
</style>
