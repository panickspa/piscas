<template>
  <kuesioner v-if="$store.state.created && $store.state.opened"/>
  <v-container v-else>
    <div class="d-flex flex-row">
      <div class="d-flex flex-column">
        <h1 class="display-2 font-weight-bold mb-3">
          Selamat Datang di CAPI Desa Cantik
        </h1>
      </div>
    </div>
  </v-container>
</template>

<script>
import KuesionerVue from './Kuesioner.vue'
  export default {
    name: 'Home',
    components:{
      'kuesioner': KuesionerVue
    },
    methods:{
      createKuesioner(){
        if(this.$route.path !== '/kuesioner')
          this.$router.push('/kuesioner')
      }
    },
    data(){
      return {} 
    },
  }
</script>
