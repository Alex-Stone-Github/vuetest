const app = Vue.createApp({
    data() {
        return {
            text: "Vue",
            timestamp: Date.now() 
        };
    },
    methods: {
        update() {
            this.timestamp = Date.now();
        }
    }

});

app.mount("#app"); // bind vue to an HTML element with id of app

