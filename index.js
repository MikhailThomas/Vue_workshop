const capital =Vue.createApp({
    template:`
    <div id='box1'>
    <input @keydown='display' id='name' type='text' v-model='name'/>
    <p v-if='isVisibleA'>You have typed uppercase A</p>
    <p v-if='isVisiblea'>You have typed lowercase a</p>
    </div>`,
    data: function() {
        return{
            name:'',
            isVisibleA:false,
            isVisiblea:false
        }
    },
    methods:{
        display(event) {
        if (event.key=='A') {
            this.isVisibleA=true
            this.isVisiblea=false
        }else if(event.key=='a') {
            this.isVisiblea=true
            this.isVisibleA=false
        }else{

        }
        },
        click(event) {

        }
    }
});
capital.mount('#capital')