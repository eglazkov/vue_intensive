const Vue = require('vue');
const axios = require('axios');

new Vue({
    el: '#app',
    data: {
        "pageList": [],
        "pageName": ''
    },
    methods: {
        createNewHtmlPage () {
            axios
                .post("./api/createNewHtmlPage.php", {name: this.pageName})
                .then(() => this.updatePageList());
        },
        removeHtmlPage (page) {
            axios
                .post("./api/removeHtmlPage.php", {name: page})
                .then(() => this.updatePageList());
        },
        updatePageList() {
            axios
                .get("./api/")
                .then(response => {
                    this.pageList = response.data;
                })
        }
    },
    created() {
       this.updatePageList();
    }
});