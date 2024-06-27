//estrapoliamo dal framework il metodo 
const { createApp }= Vue;

//Creiamo un istanza di un app Vue
createApp({
    data() {
        return{
            email: '',

        }
    },
    //funzioni methods dell App    
    methods: {

    },
    mounted () {
        // rischiesta email al server 
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail ')
        // associo la mail generata alla mail nel mio data
        .then ((mailUser) => {
            const result = mailUser.data.response           ;
            console.log(mailUser);
            this.email = result;
        })
    }
}).mount('#app')
