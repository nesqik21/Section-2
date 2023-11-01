const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      fullname:''
    };
  },
  watch:{
    name(value){
      if(value === ''){
        this.fullname = '';
      }
      this.fullname = value + ' Pudis';
    }
  },
  computed:{
    // fullName(){
    //   if(this.name === ''){
    //     return '';
    //   }
    //   return this.name + ' Pudis';
    // }
  },
  methods: {
    outputFullName(lastName){
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + lastName;
    },
    add(num) {
      this.counter += num ;
    },
    remove(num){
      this.counter -= num;
    },
    setName(event,lastName){
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm(){
      alert('Submited');
    },
    confirmedInput(){
      this.confirmedName = this.name;
    },
    resetInput(){
      this.name = ''
    }
  },
});

app.mount('#events');
