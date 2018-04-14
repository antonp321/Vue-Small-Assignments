new Vue({
    el: "#exercise",

    data: {
        value: 0
    },

    computed:{
        result: function(){
            if(this.value <= 37){
                return "Not there yet!"
            }
            else{
                return "Done!"
            }
        }
    },

    watch:{
        result: function(){
            var _this = this;

            setTimeout(function(){
                _this.value = 0;
            }, 5000);
        }
    }
});