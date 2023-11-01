const app = Vue.createApp({
    data() {
        return {
            inputText:'',
            anotherInput:''
        }
    },
    methods: {
        showAlert() {
            alert('Showing some alert message');
        },
        assignValueToInput(event){
            console.log('event',event);
            this.inputText = event.target.value;
        },
        assignValueToInputOnEnter(event){
            this.anotherInput = event.target.value;
        }
    },
});

app.mount('#assignment');