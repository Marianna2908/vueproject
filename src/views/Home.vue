<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Ticket
        v-for="event in events"
        :key="event.id"
        :singleEvent="event"
    ></Ticket>
    <router-link
        class="btn btn-primary me-1"
        :to="{ name: 'Home', query: { page: page - 1 } }"
        v-if="page != 1"
        rel="prev"
    >
      Vorige</router-link
    >
    <router-link
        class="btn btn-primary"
        :to="{ name: 'Home', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
    >
      Volgende</router-link
    >
  </div>
</template>

<script>
// @ is an alias to /src
import Ticket from "@/components/Ticket.vue";
//import axios from "axios";
import TicketService from "../services/TicketService";
import {watchEffect} from "vue";
export default {
  name: "Home",
  props: ["page"],
  components: {
    Ticket,
  },
  data() {
    return {
      events: null,
      totalEvents: 0
    };
  },
  created() {
    watchEffect(()=>{
      this.events = null
      TicketService.getEvents(2, this.page)
          .then((response) => {
            this.events = response.data;
            this.totalEvents = response.headers['x-total-count']
          })
          .catch((error) => {
            console.log(error)
          })
    })
  },
  computed:{
    hasNextPage(){
      var totalPages = Math.ceil(this.totalEvents/2)
      return this.page < totalPages
    }
  }
};
</script>

<!--<template>-->
<!--  <div class="home">-->
<!--    <img alt="Vue logo" src="../assets/logo.png" />-->
<!--    <Ticket v-for="event in events" :key="event.id" :singleEvent="event"></Ticket>-->
<!--&lt;!&ndash;    Aanmaak Buttons:&ndash;&gt;-->
<!--    <router-link-->
<!--        class="btn btn-primary me-1"-->
<!--        :to="{name: 'Home', query:{page:page -1}}"-->
<!--        v-if="page != 1"-->
<!--        rel="prev"-->
<!--        >-->
<!--        Vorige-->
<!--    </router-link-->
<!--    >-->

<!--    <router-link-->
<!--        class="btn btn-primary"-->
<!--        :to="{name: 'Home', query:{page:page +1}}"-->
<!--        rel="next"-->
<!--        v-if="hasNextPage"-->
<!--    >-->
<!--      Volgende-->
<!--    </router-link-->
<!--    >-->
<!--&lt;!&ndash;    V FOR IS EEN DIRECTIVE? : is vbind om een verbinding te maken. Ieder event in events gebruiken.-->
<!--event is een variabele in dit geval-->
<!-- :key: koppelen met event uit ticket pagina die een object is.  &ndash;&gt;-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--// @ is an alias to /src-->
<!--import Ticket from "@/components/Ticket.vue";-->
<!--// import axios from "axios"; dit mag uitgeschakeld wordendoor de TicketService js.-->
<!--import TicketService from "../services/TicketService";-->
<!--import{watchEffect} from "vue"; // tss brackets omdat het een build in moethode is van vue, childcomponent.-->
<!--// gaat kijken wat er moet veranderen in de url-->

<!--export default {-->
<!--  name: "Home",-->
<!--  props:['page'], //declaratie van je var-->
<!--  components: {-->
<!--    Ticket,-->
<!--  },-->
<!--  data(){-->
<!--    return{-->
<!--      events: null,-->
<!--      totalEvents:0-->
<!--    }-->
<!--  },-->
<!--  created() { // externe link-->
<!--    // axios.get('https://my-json-server.typicode.com/Marianna2908/fakejson/events') //endpoint-->
<!--    //     .then(response =>{-->
<!--    //   //console.log('events', response.data)-->
<!--    //       this.events=response.data // met deze date wordt de data gevuld met externe info-->
<!--    // }).catch(error=> {console.log(error)})-->
<!--    watchEffect(()=>{ // controleren van events in een stukje van pagina;-->
<!--        this.events=null-->
<!--      TicketService.getEvents(2, this.page).then(response =>{ // in de Ticketservice ophalen van Events per page 2, van die pagina,-->
<!--        this.events = response.data;-->
<!--        this.totalEvents=response.headers['x-total-count'] // headers zijn de headers van een pagina, wordt opgehaald. Headers heefft vaste parameters.-->
<!--      }).catch(error =>-->
<!--          {console.log(error)-->
<!--      })-->
<!--    })-->


<!--  },-->
<!--  computed:{-->
<!--    hasNextPage(){-->
<!--      var totalPages = Math.ceil(this.totalEvents/2) // max paginas-->
<!--      return this.page < totalPages // tonen wanneer de pagina's niet groter zijn dat de totaliteit van de pagina's-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->