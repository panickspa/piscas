<template>
    <v-container>
        <v-card>
            <v-card-title>
                <h3>{{ $store.state.kuesioner.blok_7.nama }}</h3>
            </v-card-title>
            <div class="d-flex flex-column mr-4 ml-4">
                <k-rincian 
                    v-for="r in $store.state.kuesioner.blok_7.rincian" 
                    v-bind:key="`${r.id_rincian}-rincian`"
                    :rincian="r.id_rincian"
                    :type="r.tipe_data"
                    :label="`${r.nomor}. ${r.nama}`"
                    v-model="r.isi"
                    @input="rincianUpdate({
                        isi: $event,
                        id_rincian: r.id_rincian,
                    })">
                </k-rincian>
            </div>
        </v-card>
    </v-container>
</template>

<script>
import RincianVue from './kuesioner/Rincian.vue'
    export default {
        components:{
            // eslint-disable-next-line vue/no-unused-components
            'k-rincian': RincianVue
        },
        methods:{
            rincianUpdate(e){
                this.$store.commit('updateIsi',{
                    blok: 'blok_7',
                    id_rincian: e.id_rincian,
                    isi: e.isi
                })
            }
        },
        mounted(){
            this.blok = this.$store.state.kuesioner.blok_7
        },
        data(){
            return {
                err: null,
                stateChange: false,
                blok: null
            }
        },
        errorCaptured(e){
            this.err = e
        },
        watch:{
            "$store.state.kuesioner": function(e){
                this.blok = e.blok_7
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>