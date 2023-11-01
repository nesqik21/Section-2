const app = Vue.createApp({
    data() {
        return {
            me: {
                name:'Tomas',
                age:28,
            },
            imgLink:'https://hd.wallpaperswide.com/thumbs/milky_way_night_photo-t2.jpg'
        }
    },
    methods: {
        randomNumber() {
            return Math.random();
        }
    },
});

app.mount('#assignment');