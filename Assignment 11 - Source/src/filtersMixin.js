export const filtersMixin  = {

    computed: {
        reverseTextProp(){
            return this.text.split("").reverse().join("");
        },
        countTheLengthProp(){
            return this.text.length;
        }
    }
};