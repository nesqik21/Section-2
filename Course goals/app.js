const app = Vue.createApp({
    data() {
        return {
            courseGoalA:'<h1>Dokoncit toto lol</h1>',
            courseGoalB:'<h2>ZemjakoovaKasa</h2>',

            vueLink:"www.google.com"
        }
    },
    methods: {
        outputGoals() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }    
        }
    },
});

app.mount("#user-goal");