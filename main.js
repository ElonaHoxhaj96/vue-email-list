//estrapoliamo dal framework il metodo 
const { createApp }= Vue;

//Creiamo un istanza di un app Vue
createApp({
    data() {
        return{
            email: [],

        }
    },
    mounted () {
        // faccio un ciclo che mi generi 10 emementi 
        for ( let i = 0; i < 10; i++){
             // rischiesta email al server 
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail ')
            // associo la mail generata alla mail nel mio data
            .then ((mailUser) => {
                const result = mailUser.data.response;
                console.log(mailUser);
                this.email.push(result);
            })
        }
    },

    //funzioni methods dell App    
    methods: {
        
    },
}).mount('#app')
