const app = Vue.createApp({
    data() {
        return {
            value: 0,
        }
    },
    watch: {
        result(value) {
            const that = this;
            setTimeout(function(){
                that.value = 0;
            },5000)
        }
    },
    computed: {
        result() {
            if(this.value < 37){
                return 'Not there yet'
            }else if(this.value === 37){
                return 'GREAT !!!'
            }else {
                return 'Too much!';
            }
        }
    },
    methods: {
        add(x) {
            this.value += x;
        },
        decrease(x){
            this.value -= x;
        }
    },
});

app.mount('#assignment');